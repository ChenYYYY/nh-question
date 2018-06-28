<template>
  <div class="finish-view">
    <div class="finish-wrap">
      <div class="finish-icon"></div>
      提交成功
    </div>
    <div class="finish-tips">
      感谢您的参与和对我们服务提出的宝贵意见，我们将努力改进，为您提供更好的乘机餐饮服务。
      <img :src="require('@/assets/img/people.png')">
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class Finish extends Vue {}
</script>
