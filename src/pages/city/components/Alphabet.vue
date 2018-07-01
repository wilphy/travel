<template>
  <div class="list">
    <ul class="item">
      <li class="item" v-for="(item, key) of cities" :key="key">
        {{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 2.5rem
    bottom: 0
    width: .4rem
    .item
      line-height: .36rem
      text-align: center
      color: $bgColor
</style>
