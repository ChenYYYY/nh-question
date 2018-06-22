import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
// 数据持久化
const storage = (() => {
  // WEB环境
  return window.sessionStorage || window.localStorage
})()
const vuexPersist = new VuexPersist({
  storage
})
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [vuexPersist.plugin]
})
