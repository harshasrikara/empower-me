<template lang="pug">
#app
  Header
  hello-world(@open-modal='openModal')
  Modal(v-if='showModal' @close='modalClose')
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Modal from './components/Modal'
export default {
  /* eslint-disable */
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Modal
  },
  data() {
    return  {
      showModal: false,
      callback: function() {}
    }
  },
  methods: {
    openModal(callback) {
      console.log('open')
      this.showModal = true
      if (callback && typeof callback === 'function') {
        this.callback = callback
      }
    },
    modalClose() {
      this.showModal = false
      this.callback()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
