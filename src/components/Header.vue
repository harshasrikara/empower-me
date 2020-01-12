
<template>
    <div class="header">
        <!-- <h1 class="firstLink">Text</h1> -->
        <vue-button class="firstLink">About</vue-button>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    methods: {
        buttonClicked() {
            
        }
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