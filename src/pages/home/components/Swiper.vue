<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/vc/44/3e/ec/591b009e8d0fdee7183bd696d0.jpg'
      }, {
        id: '002',
        imgUrl: 'https://img1.qunarzz.com/vc/60/81/e4/5c9d8886fc2739988b097026cc.jpg'
      }, {
        id: '003',
        imgUrl: 'https://img1.qunarzz.com/vc/19/70/66/8c54d8f3830e0f09cd3f060809.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
.wrapper
  background-color #eee
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  .swiper-img
    width: 100%
</style>
