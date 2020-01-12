<template lang="pug">
transition(name='modal')
  .modal-mask
    .modal-wrapper
      .modal-container
        .modal-header
          slot(name="header") Confirm Payment
        .modal-body
          slot(name='body')
            form.form
              .test(v-for='(formItem, index) in formItems' :key='index')
                vue-input(type='text' :placeholder='formItem' :key='formItem' :name='formItem')
                  br(:key='index')
        .modal-footer
          slot(name="footer")
            vue-button.okButton(type='success' @click='buttonClicked') OK

</template>

<script>
export default {
    methods: {
        buttonClicked() {
            this.$emit('close')
        }
    },
    data() {
        return {
            formItems: ['Full name', 'Email', 'Card Number', 'Card Expiry', 'Card CVC', 'Address', 'Phone Number']
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-footer {
    display: flex;
    justify-content: flex-end;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.okButton {
    margin-right: 10px;
    margin-bottom: 10px;
}
.test {
    display: flex;
    position: relative;
    justify-content: flex-end;
    padding: 10px;
}
.test2 {
    position: absolute;
    left: 7%;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 66%;
  height: 66%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px auto;
  padding: 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  background-color: #42b983;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  font-size: 150%;
  line-height:150%;
  margin: 20px;
  padding: 40px;
}

.modal-default-button {
  border: 1px solid blue;
  border-radius: 5px;
  width: 50px;
  float: right;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>