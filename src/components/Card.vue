<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Item</div>
        </md-card-header>

        <md-card-content>
          <img :src="`https://picsum.photos/seed/${Math.random()}200/300`" />
          {{ description }}
        </md-card-content>

        <md-card-actions>
          <md-button>More Info</md-button>
          <md-button @click="payClicked()">Pay</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.',
      amount: 10
    }
  },
  methods: {
    async payClicked() {
     const url = `https://harshasrikara.api.stdlib.com/nwhacks-test@dev/stripe/?description=${this.description}&amount=${this.amount}`
     // const url = `https://harshasrikara.api.stdlib.com/nwhacks-test@dev/sendmessage/?value=${Math.floor(Math.random()*100)}`
      const response = await fetch(url)
      console.log(response)
      const json = await response.json()
      console.log(json)
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
</style>