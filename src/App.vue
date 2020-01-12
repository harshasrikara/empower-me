<template lang="pug">
#app
  Header
  h2(class=info) Our Goal
  p(class="info") Students entering University are often faced with many financial burdens that prevent them from reaching their highest levels of success. Many students succumb to the increased costs and avoid signing up for or receiving benefits that hinder them in their educational path. We believe that students should not face these difficulties and should have an easy way to allow people to support their journey. Current solutions such as creating a goFundMe or wishlist of products often fail to have their desired impact since students cannot fully explain their backstory or motivation. Donors often have no way to hold the student accountable to success and are completely in the darkness about how their funds are used. We aim to solve these issues by providing a transparent portal for students to list the products they need for their University and be able to receive support from generous benefactors. Donors have the peace of mind that their funds are directly being used to procure resources that will benefit the student and not have to worry about fund misappropriation. Our end goal is to create a trackable portal for students that will maximize their open opportunities.<br><br>
  h2(class=info) How it Works
  p(class="info") Our goal for this hackathon was to pursue learning something new. Towards that aim, we decided to code up our portal using Vue.js, an innovative framework that combines multiple aspects of web development such as templates, scripts and designs together into singular files. Without having experience in this particular framework, it involved a steep learning curve for our teammates but was made easier by the framework that allows easy importing of libraries and components. To execute our api calls, we decided to use Standard Library. This was motivated due to several reasons. The primary reason was the ability to encapsulate multiple api calls and functions together into a new simplified api call. We were able to assign redundant variables in advance and only pass in relevant information. The second reason that motivated us to make use of standard library was security. Adding api calls to our codebase would have exposed api-keys and sensitive data. By wrapping these calls, we were able to secure our information and prevent malicious use of the code even if inspected. Within standard library, we used their latest Autocode feature to develop supported api calls to send text messages upon payment for a product. Furthermore, we designed custom actions that would create invoice items, bundle them together into an invoice and finally bill a customer. These were carried out with the Stripe API and allows for quick and easy billing of users. Together, this system allows students to receive immediate confirmation for products that were purchased for them and the donor to be charged automatically in a secure manner.<br>
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
  font-size: 180%;
  line-height: 120%;
  text-align: left;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
