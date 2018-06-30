<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-home">&#xe602;</span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-search">&#xe650;</span>
      请输入你要搜索的内容
      </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont icon-arraw">&#xe63f;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .icon-home
        text-align: center
        font-size: .4rem
        margin-left: .2rem
    .header-input
      flex: 1
      background: #ffffff
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem
      color: #666
      font-size: .3rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .icon-arraw
        font-size: .3rem
</style>
