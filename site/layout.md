# 真正的页面

<w-layout :env="env" active="home" :rule="menuTestRule" class="demo" quitAction="https://www.easy-mock.com/mock/5ab386ecca15e11ded65b593/chinese/getLoginOutCallBackUrl" :navs="barTestRule" barName="二级导航" :show="true">
  <h1>这是真正的标题</h1>
  <p>这是真正内容</p>
</w-layout>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|barName|二级导航标题|String|否|无|
|navs|导航数据。目前 路由跳转只支持 path 方法。|Array|否|[]|
|open|是否全部打开|Boolean|否|false|
|disabled|禁用|Boolean|否|false|
|env|根据环境变化的各项目链接|Object|否|{}|
|collapse|是否折叠按钮|Boolean|否|true|
|active|选中字样，添加模块名一样|String|否|无|
|show|是否展开|Boolean|否|true|
|quitAction|退出登录的接口地址|String|否|false|
|rule|权限接口请求回来的数据|Object|否|false|
|barActive|二级导航高亮|String|否|无|

### 方法

|事件名|说明|返回值|
|---|------|-----|
|analysised|获取菜单时触发|所有顶级权限|

<script>
import WLayout from '../emmenu/core/layout/Layout';
//  权限测试数据
import menuTestRule from './menudata';
//  二级白色导航测试数据
import barTestRule from './barDatas';
//  环境地址配置
import envConf from './env';

export default {
  data() {
    return {
      env: envConf.production,
      barTestRule,
      menuTestRule,
    };
  },
  components: {
    WLayout,
  },
  methods: {
  },
}
</script>

<style lang="scss">
@import '../emmenu/assets/css/layout.scss';
@import '../emmenu/assets/css/menu.scss';
@import '../emmenu/assets/css/bar.scss';

.demo {
  position: relative;
  height: 710px;
  border: 1px solid #dcdcdc;
  border-left: none;

  & .w-menu-warp {
    position: absolute;
  }

  & .w-bar {
    position: relative;
  }

  & .w-layout-main {
    height: 100%;
  }
}
</style>
