<template>
  <div class="header">
    <div class="header-left">返回</div>
    <input class="header-input" placeholder="请输入你要搜索的内容">
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .86rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      background: #ffffff
      height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      border-radius: .1rem
      color: #666
      font-size: .3rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
