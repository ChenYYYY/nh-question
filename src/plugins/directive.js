import Vue from 'vue'
Vue.directive('lazy', {
  inserted: function (el, binding) {
    let timeout = 2000
    let loadStatus = false
    el.src = binding.value
    el.onload = () => {
      loadStatus = true
    }
    setTimeout(() => {
      if (!loadStatus) {
        el.src = '#img_load_error'
      }
    }, timeout)
  }
})
