<template>
  <div class="register">

    <div class="row">
      <div class="col">
        <reg-form></reg-form>
      </div>
    </div>
    <div class="container mt-5 d-flex flex-row-reverse">
      <button
        type="button"
        class="btn btn-primary btn-sm"
      >Small button</button>
    </div>

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
