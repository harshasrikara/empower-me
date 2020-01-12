
<template>
    <div class="header">
        <vue-button class="firstLink">About</vue-button>
        <progress-bar size="medium" val="60" text="60"></progress-bar>
    </div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'
export default {
    components: {
        ProgressBar
    }
}
</script>

<style scoped>
.header {
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #42b983;
    margin-bottom: 60px;
}
.firstLink {
    margin: 0 0 0 20px;
    background-color: lightgray;
    align-self: center;
}
.firstLink:hover {
    background-color: white;
    color: green;
}

.right {
    float: right;
}
</style>