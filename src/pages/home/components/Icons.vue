<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
        class="icon"
        v-for="item of page"
        :key="item.id">

          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '../../../../static/imgs/手柄.png',
        desc: '阿斯顿发过火户籍科'
      }, {
        id: '0002',
        imgUrl: '../../../../static/imgs/头戴式耳机.png',
        desc: 'aaa'
      }, {
        id: '0003',
        imgUrl: '../../../../static/imgs/摇杆.png',
        desc: 'aaa'
      }, {
        id: '0004',
        imgUrl: '../../../../static/imgs/毽子.png',
        desc: 'aaa'
      }, {
        id: '0005',
        imgUrl: '../../../../static/imgs/气球.png',
        desc: 'aaa'
      }, {
        id: '0006',
        imgUrl: '../../../../static/imgs/话筒.png',
        desc: 'aaa'
      }, {
        id: '0007',
        imgUrl: '../../../../static/imgs/风筝.png',
        desc: 'aaa'
      }, {
        id: '0008',
        imgUrl: '../../../../static/imgs/风车.png',
        desc: 'aaa'
      }, {
        id: '0009',
        imgUrl: '../../../../static/imgs/飞镖.png',
        desc: 'aaa'
      }, {
        id: '0010',
        imgUrl: '../../../../static/imgs/魔方.png',
        desc: 'aaa'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    background-color #fafafa
  .icon
    position: relative
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      right: 0
      bottom: .44rem
      left: 0
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      text-align: center
      position: absolute
      right: 0
      bottom: 0
      left: 0
      height:.44rem
      line-height: .44rem
      color: $darkTextColor
      ellipsis()
</style>
