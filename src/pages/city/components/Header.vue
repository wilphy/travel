<template>
  <div class="header">
    城市选择
    <div>
      <router-link to="/">
        <span class="iconfont icon-back">&#58905;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    font-size: .38rem
    .icon-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .5rem
      color: #fff
</style>
