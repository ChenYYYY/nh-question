<template>
  <div id='app'>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class App extends Vue {}
</script>
<style>
@import url('./assets/css/font_721803_d2r0eleg9kj.css');
@import url('./assets/css/app.css');
body {
  margin: 0;
  background-color: #edf9fd;
}
</style>
