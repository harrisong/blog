import Vue from 'vue'
import Landing from '@/components/Landing'
import router from '@/router'

describe('Landing.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Landing)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .toEqual('Harrison Ng')
  })
})
