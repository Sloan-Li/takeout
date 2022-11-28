<template>
  <div>
    <Header :seller="seller" id="header" />

    <!-- tab -->
    <div class="tab" id="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <transition name="slide">
      <router-view></router-view>
    </transition>

    <Bottom id="bottom" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Bottom from "./components/Bottom.vue";
export default {
  data() {
    return {
      seller: {},
    };
  },
  components: {
    Header,
    Bottom,
  },
  created() {
    this.seller = this.$store.getters.getSellerData;
  },
};
</script>

<style>
/* 导航栏 */
.tab {
  width: 100%;
  display: flex;
  height: 40px;
  line-height: 40px;
  position: relative;
}
/* 导航栏下水平线 */
.tab::after {
  position: absolute;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  left: 0;
  bottom: 0;
  height: 1px;
  width: 100%;
  content: " ";
}
/* 导航栏上水平线 */
.tab::before {
  position: absolute;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  left: 0;
  top: 0;
  height: 1px;
  width: 100%;
  content: " ";
}
/* 导航项 */
.tab .tab-item {
  flex: 1;
  text-align: center;
}
/* 导航链接 */
.tab .tab-item > a {
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.tab .tab-item > .active {
  color: rgb(240, 20, 20);
}
</style>
