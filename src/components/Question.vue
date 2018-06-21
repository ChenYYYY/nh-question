<template>
  <div>
    <Header :order="order" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Header from './Header.vue'
@Component({
  components: { Header }
})
export default class Question extends Vue {
  get order (): string {
    return this.$route.params.order
  }
}
</script>
