
<template lang="pug">
.header
  vue-button.about About
  a(href="https://github.com/harshasrikara/team-awesome")
    vue-button.github Github
//-   progress-bar(v-if='false' size='medium' val='60' text='60')

</template>

<script>
// import ProgressBar from 'vue-simple-progress'
// export default {
//     components: {
//         ProgressBar
//     }
// }
</script>

<style scoped lang="scss">
.header {
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #42b983;
    margin-bottom: 60px;
    justify-content: space-between;
    align-items: center;
}
.about {
    margin: 0 0 0 20px;
    background-color: lightgray;
    align-self: center;
    &:hover {
        background-color: white;
        color: green;
    }
}
.github {
    margin: 0 20px 0 0;
    background-color: lightgray;
    align-self: center;
    &:hover {
        background-color: white;
        color: green;
    } 
}

.right {
    float: right;
}
</style>