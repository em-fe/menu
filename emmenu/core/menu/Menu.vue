<template>
  <div class="w-menu-warp">
    <div class="w-menu" :class="{'w-menu-hover': hover}">
      <div class="w-menu-header">
        <img class="w-menu-header-icon" :src="power.logo" @error="errorFn">
        <a :href="`${env.ACCOUNT||env.VUE_APP_ACCOUNT}accountinformation`" target="_blank" class="w-menu-header-title">{{power.title}}</a>
      </div>
      <ul class="w-menu-list" v-if="listHome.length">
        <li class="w-menu-list-item" v-for="(rule, ruleIndex) in listHome" :key="ruleIndex">
          <!-- on -->
          <a href="javascript:;" class="w-menu-list-link" :class="{on: activeValue === rule.icon}" @click="goPath(rule)">
            <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_normal.png`)">
            <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_selected.png`)">
            <span class="w-menu-list-title">
              <span class="w-menu-list-title-inner">{{rule.name}}</span>
              <i class="w-menu-tag" v-if="rule.tags.length > 0">{{rule.tags[0]}}</i>
            </span>
          </a>
        </li>
      </ul>
      <ul class="w-menu-list" v-if="listShop.length">
        <li class="w-menu-list-item" v-for="(rule, ruleIndex) in listShop" :key="ruleIndex">
          <a href="javascript:;" class="w-menu-list-link" :class="{on: activeValue === rule.icon}" @click="goPath(rule)">
            <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_normal.png`)">
            <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_selected.png`)">
            <span class="w-menu-list-title">
              <span class="w-menu-list-title-inner">{{rule.name}}</span>
              <i class="w-menu-tag" v-if="rule.tags.length > 0">{{rule.tags[0]}}</i>
            </span>
          </a>
        </li>
      </ul>
      <ul class="w-menu-list margin0" v-if="listOrder.length">
        <li class="w-menu-list-item" v-for="(rule, ruleIndex) in listOrder" :key="ruleIndex">
          <a href="javascript:;" class="w-menu-list-link" :class="{on: activeValue === rule.icon}" @click="goPath(rule)">
            <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_normal.png`)">
            <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_selected.png`)">
            <span class="w-menu-list-title">
              <span class="w-menu-list-title-inner">{{rule.name}}</span>
              <i class="w-menu-tag" v-if="rule.tags.length > 0">{{rule.tags[0]}}</i>
            </span>
          </a>
        </li>
      </ul>
      <!-- <a href="javascript:;" class="w-menu-release" @click="isMask = true"> -->
        <a class="w-menu-release"
         target="_blank" :href="`${env.EVENT||env.VUE_APP_EVENT}checktmodal`">
        <img class="w-menu-release-img" :src="require(`assets/img/release.png`)">
        <span class="w-menu-release-title">免费发活动</span>
      </a>
      <a class="w-menu-quit" @click="modalShow = true">
        <img class="w-menu-quit-img" :src="require(`assets/img/quit.png`)">
        <img class="w-menu-quit-img" :src="require(`assets/img/quit_hover.png`)">
        <span class="w-menu-quit-title">退出</span>
      </a>
    </div>
    <!-- 免费发活动 start -->
    <div v-if="isMask" class="w-menu-mask">
      <div class="w-menu-mask-box">
        <span class="w-menu-mask-close" @click="isMask = false">+</span>
        <h4 class="w-menu-mask-title">选择发布的活动类型</h4>
        <div class="w-menu-mask-modal">
          <a target="_blank" :href="`${env.MEET||env.VUE_APP_MEET}light`" class="w-menu-mask-light">
            <img class="w-menu-mask-img" :src="require(`assets/img/light.svg`)">
            <span class="w-menu-mask-name">报名</span>
            <span class="w-menu-mask-content">聚会、沙龙、排队、培训、会议、粉丝赠票、签到二维码、可审核、可付费、邀请函</span>
          </a>
          <a target="_blank" :href="`${env.EVENT||env.VUE_APP_EVENT}eventpublish`" class="w-menu-mask-light">
            <img class="w-menu-mask-img" :src="require(`assets/img/event.svg`)">
            <span class="w-menu-mask-name">票务</span>
            <span class="w-menu-mask-content">剧场、音乐节、巡演、赛事、会议、展览、游园、多票种、多场次、选座、秒杀抢票、多种核销、代金券、年卡、外币支付</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 免费发活动 end -->
    <!-- 退出弹框 start -->
    <div class="w-menu-modal" v-if="modalShow">
      <div class="w-menu-modal-mask"></div>
      <div class="w-menu-modal-wrap">
        <div class="w-menu-modal-header">
          <div class="w-menu-modal-inner">退出账号</div>
          <div class="w-menu-modal-close" @click="modalShow = false">＋</div>
        </div>
        <div class="w-menu-modal-main">确定要退出账号？</div>
        <div class="w-menu-modal-footer">
          <button class="w-menu-modal-cancel" @click="modalShow = false">取消</button>
          <button class="w-menu-modal-ok" @click="modalOk">确定</button>
        </div>
      </div>
    </div>
    <!-- 退出弹框 end -->
  </div>
</template>
<script>
  import 'em-cookie';
  import 'em-jsonp';
  import message from 'message/index';
  import CONSTANT from 'helper/constant';
  import ajax from 'helper/ajax';
  import newRoot from 'helper/newRoot';

  export default {
    name: 'WMenu',
    data() {
      return {
        // 调试一级黑色导航样式的时候可以为 true 方便调试
        hover: false,
        // hover: true,

        isMask: false,
        user: '',
        modalShow: false,
        callbackUrl: [],
        power: {},
        listHome: [],
        listShop: [],
        listOrder: [],
      };
    },
    props: {
      env: {
        type: Object,
        default: () => {},
      },
      active: {
        type: String,
        default: '',
      },
      quitAction: String,
      rule: Object,
    },
    computed: {
      activeValue() {
        return this.active;
      },
    },
    mounted() {
      this.handleData();
    },
    methods: {
      errorFn() {
        // 如果报错就是默认图片
        this.power = Object.assign({}, this.power, {
          logo: 'https://static2.evente.cn/static/img/icon.jpg',
        });
      },
      // 处理权限接口数据
      handleData() {
        this.power = newRoot(this.rule, this.env);

        const menuFirstBlock = ['home', 'event', 'meetup', 'form', 'goods'];
        const menuTwoBlock = ['shop', 'marketing', 'distribution', 'member'];
        const menuThreeBlock = ['data', 'order', 'finance'];
        this.power.menuList.forEach((item) => {
          if (menuFirstBlock.includes(item.icon)) {
            this.listHome.push(item);
          } else if (menuTwoBlock.includes(item.icon)) {
            this.listShop.push(item);
          } else if (menuThreeBlock.includes(item.icon)) {
            this.listOrder.push(item);
          }
        });
        this.$emit('analysised', this.power);
      },
      goPath(rule) {
        // staff
        if (rule.denied_tips) {
          message.error({
            content: rule.denied_tips,
          });
        } else if (rule.target === '_blank') {
          window.open(rule.path);
        } else {
          window.location.href = rule.path;
        }
      },
      // 免费发活动和退出 start
      modalOk() {
        this.modalShow = false;
        this.goOut();
      },
      goOut() {
        ajax({
          type: 'GET',
          action: this.quitAction,
          onSuccess: (res) => {
            if (res.code === CONSTANT.SUCCESS) {
              this.callbackUrl = res.data.url_list.slice();
              this.afterLogout(this.callbackUrl.length - 1);
            } else {
              message.error({
                content: res.message,
              });
            }
          },
          onError: (err, response) => {
            message.error({
              content: response.message,
            });
          },
        });
      },
      afterLogout(inow) {
        let theIndex = inow;
        window.$jsonp({
          url: this.callbackUrl[theIndex],
          success: (res) => {
            if (res.code === CONSTANT.SUCCESS) {
              if (theIndex === 0) {
                this.logoutSuc();
              } else {
                this.afterLogout(--theIndex);
              }
            } else {
              message.error({
                content: '登录失败',
              });
            }
          },
          error: () => {
            message.error({
              content: '登录失败',
            });
          },
        });
      },
      logoutSuc() {
        window.$cookie.remove(CONSTANT.EVENT_TOKE);
        window.$cookie.remove(CONSTANT.EVENT_USER);
        // 不加定时器，登录cookie还在
        setTimeout(() => {
          window.location.href = `${this.env.ACCOUNT || this.env.VUE_APP_ACCOUNT}login`;
        }, 0);
      },
      // 免费发活动和退出 end
    },
  };
</script>
