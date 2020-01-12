<template>
  <div id="app">
    <Header></Header>
    
    <HelloWorld @pay-clicked="payClicked" msg="Welcome to Your Vue.js App"/>
    <Modal v-if="showModal" @close="modalClose" ></Modal>
  </div>
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
    payClicked(callback) {
      this.showModal = true
      this.callback = callback
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
