<template>
  <div class="container">
    <template v-for="index in 10">
      <Card class="card" :key="index" @more-info-clicked="btnClicked" @pay-clicked="btnClicked"></Card>
    </template>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "HelloWorld",
  components: {
    Card
  },
  methods: {
    btnClicked(opts={}) {
      this.$emit('open-modal', opts)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 3%;
}
.card {
  padding-bottom: 15px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
