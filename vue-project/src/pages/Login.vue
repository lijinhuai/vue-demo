<template>
  <div class="container">
    <div class="clo-md-2">
      <input class="btn-default btn" v-model="msg" @click="submitForm">
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    submitForm() {
      // alert($('.btn').val());
      const self = this;
      // self.$toast('Hello world!')
      self.$router.push('/chart');
    }
  }
}
</script>

