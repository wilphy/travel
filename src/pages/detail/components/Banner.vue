<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
      class="banner-img"
      src="../../../../static/imgs/detail-banner/canton-tower/canton-tower-1200872_960_720.jpg">
      <div class="banner-info">
        <div class="banner-title">
          AAAAAAAAAAAAAAAAAA
        </div>
        <div class="banner-imgNumber">
          <span class="iconfont banner-icon">&#xe600;</span>
          39
          </div>
      </div>
    </div>
    <common-gallary
    :imgs="imgs"
    v-show="showGallary"
    @close="handleGallaryClose"
    >
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['../../../../static/imgs/detail-banner/canton-tower/canton-1525284_960_720.jpg', '../../../../static/imgs/detail-banner/canton-tower/canton-2278473_960_720.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}

</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0,0), rgba(0, 0, 0, .8))
    .banner-title
      flex: 1
      font-size: .24rem
      font-size: .32rem
      padding: 0 .3rem
    .banner-imgNumber
      height: .32rem
      line-height: .4rem
      margin-top: .2rem
      padding: 0 .4rem
      border-radius: .1rem
      background: rgba(0, 0, 0, .8)
      .banner-icon
        font-size: .24rem
</style>
