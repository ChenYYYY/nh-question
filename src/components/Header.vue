<template>
  <div class="header-wrap flex flex-row">
    <div v-for="n in maxlength" :key="n" class="header-item">
      <div :class="['order-item', { active: n == order }]">
        <span class="order-text pos-center">{{n}}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
@Component
export default class Header extends Vue {
  @Prop({ default: 1 })
  order: number
  maxlength: number = 6
}
</script>
<style lang="less">
.ta-c {
  text-align: center;
}
.flex {
  display: flex;
}
.flex-row {
  flex-flow: row;
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
.header-wrap:extend(.flex, .flex-row) {
  background-color: #fcfcfc;
}
.header-item:extend(.fx-1, .ta-c) {
}
.order-item {
  position: relative;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #fff;
  padding-bottom: 100%;
  &.active {
    background-color: blue;
    color: #fff;
  }
}
.order-text {
  display: block;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
}
</style>
