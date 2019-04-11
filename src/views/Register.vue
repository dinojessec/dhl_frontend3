<template>
  <div class="container">

    <div class="row">
      <div class="col">
        <div
          class="alert alert-danger"
          role="alert"
          v-if="status === 404"
        >{{ responseMessage }}</div>
        <div
          class="alert alert-success"
          role="alert"
          v-if="status === 200"
        >{{ responseMessage }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <reg-form></reg-form>
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
import axios from "axios";

import regForm from "../components/student/reg-form";

export default {
  name: "Register",
  components: {
    regForm
  },
  data() {
    return {
      responseMessage: "",
      error: "",
      status: ""
    };
  },

  methods: {
    saveStudent() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          this.responseMessage = "All fields are required!";
          // this.error = result;
          this.status = 404;
          return;
        } else {
          const studentData = this.$store.getters.getStudentData;
          console.log(studentData);
          axios
            .post("http://localhost:3000/api/v1/register", studentData)
            .then(response => {
              console.log(response);
              const responseMessage = response.data.message;
              const responseStatus = response.data.status;
              this.responseMessage = responseMessage;
              this.status = responseStatus;
              // this.$router.push({ path: "/" });
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
