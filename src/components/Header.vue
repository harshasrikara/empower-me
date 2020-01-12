<template>
    <div class="header">
        <h1 class="firstLink">Text</h1>
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
    background-color: lightgray;
    margin-bottom: 60px;
}
.firstLink {
    margin: 0 0 0 20px;
    align-self: center;
}
</style>