<template>
<div>
  <div class="search">
    <input
    class="search-input"
    type="text"
    placeholder="请输入城市名或拼音"
    v-model="keyword"
    >
  </div>
  <div
  class="search-content"
  ref="search"
  v-show="keyword"
  >
    <ul>
      <li
      class="search-item border-bottom"
      v-for="item of list"
      :key="item.id"
      @click="handleCityClick(item.name)"
      >
        {{ item.name }}
      </li>
      <li
      class="search-item border-bottom"
      v-show="hasNoData"
      >
        没有找到匹配数据
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
      console.log(city)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
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
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background-color: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background-color: #fff
      color: #666
</style>
