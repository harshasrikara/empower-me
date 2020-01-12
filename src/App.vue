<template lang="pug">
#app
  Header
  p(class="info") Students entering University are often faced with many financial burdens that prevent them from reaching their highest levels of success. Many students succumb to the increased costs and avoid signing up for or receiving benefits that hinder them in their educational path. We believe that students should not face these difficulties and should have an easy way to allow people to support their journey. Current solutions such as creating a goFundMe or wishlist of products often fail to have their desired impact since students cannot fully explain their backstory or motivation. Donors often have no way to hold the student accountable to success and are completely in the darkness about how their funds are used. We aim to solve these issues by providing a transparent portal for students to list the products they need for their University and be able to receive support from generous benefactors. Donors have the peace of mind that their funds are directly being used to procure resources that will benefit the student and not have to worry about fund misappropriation. Our end goal is to create a trackable portal for students that will maximize their open opportunities.
  hello-world(@open-modal='openModal')
  Modal(v-if='showModal' @close='modalClose')
    template(v-if="desc && imageSrc" slot="header") More Info
    template(v-if="desc && imageSrc" slot="body")
      img(:src="imageSrc" width="300")
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
.info {
  text-align: left;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
