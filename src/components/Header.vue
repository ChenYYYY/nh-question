<template>
  <div class="header-wrap">
    <div class="header-tips">
      总共{{maxlength}}题，占用您一分钟
    </div>
    <div class="flex flex-row">
      <div v-for="n in layMaxlength" :key="n" class="header-item">
        <div v-if="n % 2 == 0" class="order-split"></div>
        <div v-else :class="['order-item', { active: order[(Math.ceil(n / 2) - 1)] }]">
          <span class="order-text pos-center">{{Math.ceil(n / 2)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
@Component
export default class Header extends Vue {
  @Prop() order: boolean[]
  maxlength: number = 4
  get layMaxlength () {
    return this.maxlength * 2 - 1
  }
}
</script>
<style>
.ta-c {
  text-align: center;
}
.flex {
  display: flex;
}
.flex-row {
  flex-flow: row;
}
.flex-wrap {
  flex-wrap: wrap;
}
.fx-1 {
  flex: 1;
}
.pos-center {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  margin: auto;
}
.header-wrap {
  padding: 16px;
  background-color: #d6ecfd;
}
.header-tips {
  text-align: center;
  margin-bottom: 10px;
}
.header-item {
  position: relative;
  flex: 1;
  text-align: center;
}
.order-split {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  border-top: 1px dashed #2d639d;
}
.order-item {
  position: relative;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #ccc;
  width: 36px;
  height: 36px;
  color: #fff;
  margin: 0 auto;
}
.order-item.active {
  background-color: #63afeb;
  border: 2px solid #2d639d;
}
.order-text {
  display: block;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
}
</style>
