<template lang="pug">
#app
  Header
  hello-world(@open-modal='openModal')
  Modal(v-if='showModal' @close='modalClose')
    template(v-if="desc && imageSrc" slot="header") More Info
    template(v-if="desc && imageSrc" slot="body")
      img(:src="imageSrc")
      p {{ desc }}
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
      callback: function() {},
      desc: '',
      imageSrc: ''
    }
  },
  methods: {
    openModal(opts={}) {
      console.log(opts)
      this.showModal = true
      if (opts.callback && typeof opts.callback === 'function') {
        this.callback = opts.callback
      }
      if (opts.description) {
        this.desc = opts.description
      }
      if (opts.image) {
        this.imageSrc = opts.image
      }
    },
    modalClose() {
      this.showModal = false
      this.callback()
      this.callback = function() {}
      this.desc = ''
      this.imageSrc = ''
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
