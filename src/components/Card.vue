<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">
            {{ title }}
          </div>
        </md-card-header>

        <md-card-content>
          <img :src="image" class="image" />
          <p class="description"> {{ description }} </p>
        </md-card-content>

        <md-card-actions>
          <md-button @click="$emit('more-info-clicked', { description, image })">More Info</md-button>
          <md-button @click="payClicked">Pay</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.'
    },
    image: {
      type: String,
      default: `https://picsum.photos/seed/${Math.random()}200/300`
    },
    title: {
      type: String,
      default: 'Item'
    },
    amount: {
      type: Number,
      default: 10
    }
  },
  // data() {
  //   return {
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.',
  //     amount: 10,
  //     image: `https://picsum.photos/seed/${Math.random()}200/300`
  //   }
  // },
  methods: {
    payClicked() {
      this.$emit('pay-clicked', { callback: async () => {
        const url = `https://harshasrikara.api.stdlib.com/nwhacks-test@dev/stripe/?description=books&amount=10`
        const url2 = `https://harshasrikara.api.stdlib.com/nwhacks-test@dev/sendmessage/?value="you have received payment for ${this.description}"`
        const response = await fetch(url)
        const response2 = await fetch(url2)
        console.log(response)
        console.log(response2)
        const json = await response.json()
        const json2 = await response2.json()
        console.log(json)
        console.log(json2)
      }})
    }
  }
}
</script>

<style scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .image {
    max-height: 192.22px;
  }
  .description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;  
  }
</style>