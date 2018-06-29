<template>
  <div>
    <div class="recommend-title">景点推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key=item.id>
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '../../../../static/imgs/recommend/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '广州泰航直飞',
        desc: '<泰国曼谷+芭提雅6天>5晚豪华五星酒店+特色餐食+送保险'
      }, {
        id: '0002',
        imgUrl: '../../../../static/imgs/recommend/5ce590745204c90193835fbb.jpg_256x160_04bdc5bd.jpg',
        title: '广州--新加坡',
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
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #aaa
      ellipsis()
    .item-button
      line-height: .45rem
      margin-top: .2rem
      background-color #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>
