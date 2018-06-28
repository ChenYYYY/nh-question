<template>
  <div class="view view-main">
    <img class="banner" v-lazy="require('@/assets/img/banner.png')" alt="banner_img">
    <div class="wrap wrap-text" style="margin-bottom: 50px;">
      <div class="wrap-text-content main">
        {{text}}
      </div>
    </div>
    <a @click="enterQuestion" class="button">
      填写问卷
    </a>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Main extends Vue {
  text: string = '南航在2018年6月开始在进出北京、上海的国内航线上推出新品餐食，现向广大旅客朋友征询意见，以指导我们进一步改进餐食服务质量，为您带来更好的机上餐饮体验！'
  enterQuestion (): void {
    this.$router.push('/question')
  }
}
</script>
