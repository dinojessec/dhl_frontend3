<template>
  <div class="register">
    <h1>register page</h1>
    <reg-form></reg-form>
  </div>
</template>

<script>
import regForm from '../components/student/reg-form';

export default {
  name: 'Register',
  components: {
    regForm
  },
};
</script>

<style scoped>
</style>
