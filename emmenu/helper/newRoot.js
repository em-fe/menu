import hOwnProperty from 'em-underline/hOwnProperty';
import CONSTANT from './constant';

export default (rule, env) => {
  const {
    API_KEY,
    IS_MENU_TYPE,
  } = CONSTANT;
  const { NAME, SUB, CODE } = API_KEY;
  const showName = NAME.toLocaleLowerCase();
  const code = CODE.toLocaleLowerCase();
  const { org, menus } = rule;
  const obj = {
    menuList: [],
    title: org.org_name,
    logo: org.org_logo,
  };
  const newRoot = menus.slice();
  // 递归累加所有权限输出
  const handleReduce = (item, kids) => {
    if (hOwnProperty(kids, SUB) && kids[SUB].length > 0) {
      if (!hOwnProperty(obj, `${item[showName]}auth`)) {
        obj[`${item[showName]}auth`] = {};
      }
      const newKidAliases = kids[SUB].reduce((kidKeys, kid) => {
        // 如果是无权限页
        const { options } = kid;
        if (!kid.is_accessible && options.denied_type === 'error_page') {
          kid.isError = true;
        }
        // 如果是引导升级版本
        if (!kid.is_accessible && options.denied_type === 'buy_editions') {
          kid.isBuyEditions = true;
          kid.authPath = `${env.ACCOUNT || env.VUE_APP_ACCOUNT}service/intro`;
        }
        // 如果是引导升级版本
        if (!kid.is_accessible && options.denied_type === 'buy_functions') {
          kid.isBuyFunctions = true;
          kid.authPath = `${env.ACCOUNT || env.VUE_APP_ACCOUNT}service/helper/${kid[code]}`;
        }
        kidKeys[kid[code]] = kid;
        handleReduce(item, kid);
        return kidKeys;
      }, {});
      obj[`${item[showName]}auth`] = Object.assign(obj[`${item[showName]}auth`], newKidAliases);
    }
  };

  // pathDefult 中配置好，即可显示，成为导航
  newRoot.forEach((item) => {
    const moduleName = item[showName];
    const {
      options, path, tags, type,
    } = item;
    obj[`${moduleName}source`] = item;
    // 如果是在事先准备好的路径中
    if (type === IS_MENU_TYPE) {
      const baseList = {
        name: item.name,
        icon: moduleName,
      };
      const { domain, target } = options;
      baseList.target = target;
      baseList.tags = tags;
      // 如果有权限
      baseList.path = `${domain}${path}`;
      // 如果是子账号没有权限的 2.0
      // 如果是主账号
      if (org.account_type === 'org' && item.options.version === '2.0' && !item.is_accessible) {
        baseList.denied_tips = item.options.denied_tips;
      }
      // 如果 2.0 有权限才显示菜单
      // 如果 3.0 全显示
      if (org.account_type === 'org' || (org.account_type === 'staff' && item.is_accessible)) {
        obj.menuList.push(baseList);
      }
    }
    obj[moduleName] = item[SUB];
    // 如果有子级权限， 直接列岛 XXXauth 字段中，其中 XXX 代表某一权限
    handleReduce(item, item);
  });

  return obj;
};
