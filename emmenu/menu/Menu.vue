<template>
  <div class="w-menu" :class="{[`${prefix}-menu`]: !!prefix}" ref="menu"
       @mouseleave="hideTime()">
    <div class="w-menu-main">
      <h3 class="w-menu-header" :class="{'w-menu-header-on': curMenuObject === header.name}">
        <div class="w-menu-header-link" @click="goToPath(header)">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_selected.png')"
               v-if="header.icon">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_normal.png')"
               v-if="header.icon">
          <span class="w-menu-header-text">{{header.name}}</span>
        </div>
      </h3>
      <ul class="w-menu-list">
        <template v-for="(item, itemIndex) in datas">
          <li v-if="item.path" class="w-menu-list-li"
              :class="{'w-menu-list-li-on': curMenuObject === item.name}"
              @click="goToPath(item)"
              @mouseenter="hideTime()">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected.png')"
                 v-if="item.icon">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal.png')"
                 v-if="item.icon">
            <span class="w-menu-text">{{item.name}}</span>
          </li>
          <li v-else-if="item.source" class="w-menu-list-li"
              :class="{'w-menu-list-li-on': curMenuObject === item.name}"
              @mouseenter="showTime(item)" @click="barClick(item)">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected.png')"
                 v-if="item.icon">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal.png')"
                 v-if="item.icon">
            <span class="w-menu-text">{{item.name}}</span>
          </li>
          <li v-else-if="item.url" class="w-menu-list-li"
              :class="{'w-menu-list-li-on': curMenuObject === item.name}"
              @click="goToUrl(item)"
              @mouseenter="hideTime()">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected.png')"
                 v-if="item.icon">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal.png')"
                 v-if="item.icon">
            <span class="w-menu-text">{{item.name}}</span>
          </li>
        </template>
      </ul>
    </div>
    <bar :data="barData" :status="barStatus" :name="curMenuObject" />
  </div>
</template>
<script>
  import hOwnProperty from 'em-underline/hOwnProperty';
  import CONSTANT from './common/constant';
  import ajax from '../tools/ajax';
  import newRoot from '../tools/newRoot';
  import { setStorage } from '../tools/localstorage';
  import VueCookies from '../tools/cookie'
  import menuMessage from './component/message/index';
  import bar from './Bar';
  import development from '../menu/common/development';

  const {
    ALIASES,
    MODULE_NAME,
    SUCCESS,
    MARKETING_BAR,
    DATA_BAR,
  } = CONSTANT;

  export default {
    name: 'WMenu',
    data() {
      return {
        iconObj: {
          home: 'kzt',
          event: 'pw',
          meetup: 'bm',
          goods: 'sp',
          form: 'bd',
          order: 'dd',
          data: 'sj',
          finance: 'cw',
          marketing: 'yx',
          member: 'hy',
          shop: 'dp',
        },
        barObject:{
          '控制台':`${development[this.processEnv].account}`,
          '报名': `${development[this.processEnv].activity}`,
          '票务': `${development[this.processEnv].event}overview`,
          '表单': `${development[this.processEnv].form}`,
          '店铺': `${development[this.processEnv].shop}list`,
          '营销': `${development[this.processEnv].account}salespromotion`,
          '会员': `${development[this.processEnv].member}list`,
          '数据': `${development[this.processEnv].data}mobileanalyze`,
          '财务': `${development[this.processEnv].finance}overview`,
          '周边': `${development[this.processEnv].goods}list`,
          '订单': `${development[this.processEnv].order}allorder`,
        },
        curMenuObject: '',
        curBarObject: '',
        user: '',
        menusData: {},
        header: {},
        headers: {},
        datas: [],
        barStatus: false,
        barMode: false,
        barName: '',
        barTitle: {
          marketing: '营销应用',
          data: '数据中心',
        },
        barData: {},
        pathNoAuth: `${development[this.processEnv].member}error`,
      };
    },
    props: {
      mode: {
        type: String,
        default: 'handle', // 菜单模式， handle 只是处理一下 业务里面返回的数据 , ajax 请求权限 v2 接口并处理数据
      },
      handleMenu: Array,
      prefix: String,
      getMenuAction: String,
      processEnv: {
        type: String,
        default: 'development',
      },
      ajaxHeaders: {
        type: Object,
        default() {
          return {};
        },
      },
      curMenu: '',
      curBar: '',
      hideBarName: {
        type: String,
        default: 'all',
      },
    },
    mounted() {
      window.$cookie = VueCookies;
      this.updateBarMode(this.hideBarName);
      this.headers = Object.assign({}, this.ajaxHeaders);
      if (this.mode === 'handle') {
        this.handleData();
      } else {
        this.getMenu();
      }
      if (!window.$cookie.get("CURMENUNAME")) {
        window.$cookie.set("CURMENUNAME", '控制台');
      }
      this.curMenuObject = window.$cookie.get("CURMENUNAME");
    },
    methods: {
      handleData() {
        if (this.handleMenu) {
          this.afterrHandle(this.handleMenu);
        }
      },
      updateBarMode(val) {
        this.barMode = val;
      },
      getMenu() {
        if (this.getMenuAction) {
          ajax({
            headers: this.headers,
            type: 'GET',
            action: this.getMenuAction,
            onSuccess: (res) => {
              if (res.code === SUCCESS) {
                this.afterrHandle(res.data);
              } else {
                menuMessage.error({
                  content: res.message,
                });
              }
            },
            onError: (err, response) => {
              menuMessage.error({
                content: response.message,
              });
            },
          });
        }
      },
      afterrHandle(data) {
        this.menusData = newRoot(data, this.processEnv, this.iconObj);
        this.header = this.menusData.header;
        this.datas = this.menusData.menuList;
        const { dataauth = { is_auth: 0 } } = this.menusData;
        const shopSource = this.menusData.marketingauth[ALIASES.SHOP];
        const shopAuth = shopSource.is_auth ? shopSource.is_auth : 0;
        const shopLink = shopAuth ? development[this.processEnv].shop : this.pathNoAuth;
        // 处理店铺
        let curObject = {
          name: '店铺',
          icon: this.iconObj.shop,
          path: shopLink,
        };
        if (!shopAuth) {
          curObject.noAuth = true;
        }
        this.datas.splice(4, 0, curObject);
        // 创建二级导航
        this.marketBar = [{
          name: '促销',
          path: `${development[this.processEnv].account}salespromotion`,
        }, {
          name: '店铺',
          path: shopLink,
        }, {
          name: '分销',
          url: development[this.processEnv].distri,
        }, {
          name: '其他',
          path: `${development[this.processEnv].account}theother`,
        }];
        this.dataBar = [{
          name: '手机号分析',
          path: dataauth[ALIASES.DATA_MOBILE_ANALYZE] ? `${development[this.processEnv].data}mobileanalyze` : this.pathNoAuth,
        }, {
          name: '身份证分析',
          path: dataauth[ALIASES.DATA_IDENTITY_ANALYZE] ? `${development[this.processEnv].data}identityanalyze` : this.pathNoAuth,
        }, {
          name: '数据大屏',
          path: dataauth ? `${development[this.processEnv].data}profile` : this.pathNoAuth,
        }];
        // 记录二级导航数据
        setStorage(MARKETING_BAR, this.marketBar.slice().map(item => JSON.stringify(item)).join(',,'));
        setStorage(DATA_BAR, this.dataBar.slice().map(item => JSON.stringify(item)).join(',,'));
        this.$emit('getAllData', this.menusData);
        // 检测匹配
        //this.matchUrl();
      },
      // 如果直接按浏览器返回按钮，状态会失效
      matchUrl() {
        const {
          href,
        } = window.location;
        // 检测主要除了 bar 之外的一级菜单
        let inSite = this.datas.filter(dataKey => href.indexOf(dataKey.path) > -1);
        // 检测头部
        if (inSite.length === 0) {
          inSite = href.indexOf(this.header.path) > -1 ? [this.header] : [];
        }
        this.curMenuObject = inSite.length > 0 ? inSite[0].name : '';
        // 如果一级 不带有 bar 菜单中并未匹配到
        // 匹配营销
        if (!this.curMenuObject) {
          inSite = this.marketBar.filter(dataKey => href.indexOf(dataKey.path) > -1);
          this.curMenuObject = inSite.length > 0 ? '营销' : '';
          this.curBarObject = inSite.length > 0 ? inSite[0].name : '';
        }
        // 匹配数据
        if (!this.curMenuObject) {
          inSite = this.dataBar.filter(dataKey => href.indexOf(dataKey.path) > -1);
          this.curMenuObject = inSite.length > 0 ? '数据' : '';
          this.curBarObject = inSite.length > 0 ? inSite[0].name : '';
        }
        // 顶替名字
        if (this.curMenu) {
          this.curMenuObject = this.curMenu;
        }
        if (this.curBar) {
          this.curBarObject = this.curBar;
        }
      },
      goToPath(item) {
        if (hOwnProperty(item, 'path')) {
          if (item.noAuth) {
            window.open(item.path);
            return;
          }
          this.curMenuObject = item.name;
          window.$cookie.set("CURMENUNAME", item.name);
          if (typeof window !== 'undefined') {
            let activeBarUrl = this.barObject[item.name];
            window.$cookie.set("ACTIVEBARURL", activeBarUrl);
            if (item.name === '会员') {
              window.open(item.path);
            } else {
              window.location.href = item.path;
            }
          }
        }
      },
      goToUrl(item) {
        if (hOwnProperty(item, 'url')) {
          if (item.noAuth) {
            window.open(item.path);
            return;
          }
          this.curMenuObject = item.name;
          window.$cookie.set("CURMENUNAME", item.name);
          if (typeof window !== 'undefined') {
            let activeBarUrl = this.barObject[item.name];
            window.$cookie.set("ACTIVEBARURL", activeBarUrl);
            window.open(item.url);
          }
        }
      },
      barClick(item) {
        if (item.noAuth) {
          window.open(item.path);
          return;
        }
        let newItem = null;
        this.curMenuObject = item.name;
        window.$cookie.set("CURMENUNAME", item.name);
        if (item.source.module_name === MODULE_NAME.MARKET) {
          newItem = this.marketBar;
        } else {
          newItem = this.dataBar;
        }
        let activeBarUrl = this.barObject[item.name];
        window.$cookie.set("ACTIVEBARURL", activeBarUrl);
        window.location.href = newItem[0].path;
      },
      showTime(item) {
        if (this.hideBarName !== item.name) {
          this.barName = item.name;
          this.barStatus = true;
          let newItem = null;
          if (item.source.module_name === MODULE_NAME.MARKET) {
            newItem = this.showMarket(item);
          } else {
            newItem = this.showData(item);
          }
          this.barData = newItem.source;
        }
      },
      showMarket(item) {
        item.source.child = this.marketBar.slice();
        return item;
      },
      showData(item) {
        item.source.child = this.dataBar.slice();
        return item;
      },
      hideTime() {
        if (this.hideBarName !== this.barName) {
          this.barStatus = false;
          this.barName = '';
          this.barData = {};
        }
      },
    },
    components: {
      menuMessage,
      bar,
    },
    watch: {
      curMenuObject: {
        handler() {
          this.$emit('curMenuStatus', this.curMenuObject);
          this.$emit('curBarStatus', this.curBarObject);
        },
        deep: true,
      },
      hideBarName(val) {
        this.updateBarMode(val);
      },
    },
  };
</script>
