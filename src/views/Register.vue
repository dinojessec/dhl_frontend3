<template>
  <div class="container">

    <div class="row">
      <div class="col">
        <div
          class="p-3 mb-2 bg-success text-white"
          v-if="successMessage !== ''"
        >{{ successMessage }}</div>
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
      successMessage: '',
    }
  },

  // created() {
  //   axios.get('http://localhost:3000/api/v1/register')
  //     .then((response) => {
  //       const loadStrand = response.data.strandData;
  //       this.strandList = loadStrand;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  methods: {
    saveStudent() {
      const studentData = this.$store.getters.getStudentData;
      console.log(studentData);
      axios
        .post('http://localhost:3000/api/v1/register', studentData)
        .then((response) => {
          console.log(response.data.message);
          const submitResult = response.data.message;
          if (submitResult === 'success') {
            this.successMessage = 'Account Created! Please Log-in and update your profile';
              // reroute the user to login page 
            // this.$router.replace({ path: '/login' });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
