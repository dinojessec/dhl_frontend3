<template>
  <div class="container">

    <div class="row">
      <div class="col">
        <div
          class="p-3 mb-2 alert-danger"
          v-if="error === false"
        >{{ responseMessage }}</div>
        <div
          class="p-3 mb-2 alert-success"
          v-if="error === true"
        >{{ responseMessage }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <reg-form :strandList="strandList"></reg-form>
      </div>
    </div>
    <div class="container mt-5 d-flex flex-row-reverse">
      <button
        type="button"
        class="btn btn-primary btn-sm"
        @click="saveStudent()"
        :disabled="errors.any()"
      >Submit</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

import regForm from '../components/student/reg-form';

export default {
  name: 'Register',
  components: {
    regForm
  },
  data() {
    return {
      strandList: [],
      responseMessage: '',
      error: '',
    }
  },

  created() {
    axios.get('http://localhost:3000/api/v1/register')
      .then((response) => {
        const loadStrand = response.data.strandData;
        this.strandList = loadStrand;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    saveStudent() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          this.responseMessage = 'All fields are required!';
          this.error = result
          console.log(result);
        } else {
          this.responseMessage = 'Account Created!';
          const studentData = this.$store.getters.getStudentData;
          console.log(studentData);
          this.error = result;
          // axios
          //   .post('http://localhost:3000/api/v1/register', studentData)
          //   .then((response) => {
          //     const responseMessage = response;
          //     console.log(responseMessage);
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
      }
      });
    },

  },
};
</script>

<style scoped>
</style>
