<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background-color: $bgColor
    .search-input
      box-sizing: border-box
      height: .6rem
      padding: 0 .3rem
      line-height: .6rem
      width: 100%
      text-align: center
      border-radius: .08rem
      color: 666
</style>
