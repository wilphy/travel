<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key=item.id>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '../../../../static/imgs/recommend/38682c27f5e977f7.png_640x360_589e2377.png',
        title: '广州--惠州',
        desc: '<泰国曼谷+芭提雅6天>5晚豪华五星酒店+特色餐食+送保险'
      }, {
        id: '0002',
        imgUrl: '../../../../static/imgs/recommend/5893517eb3b2c38f213a9cdb.jpg_256x160_0b8ebbd4.jpg',
        title: '广州--深圳',
        desc: '<新加坡+马来西亚6天4晚>玩转云顶丨一晚5星丨特色餐食丨天天发团 '
      }, {
        id: '0003',
        imgUrl: '../../../../static/imgs/recommend/64f7dc2271fe4802.jpg_640x360_77751ff3.jpg',
        title: '迪士尼乐园',
        desc: '投入最缤纷的香港迪士尼乐园夏日盛事'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.recommend-title
  margin-top: .05rem
  line-height: .8rem
  background-color: #eee
  text-indent: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 34%
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #aaa
    ellipsis()
</style>
