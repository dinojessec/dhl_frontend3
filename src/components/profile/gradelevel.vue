<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p>Select Grade Level</p>
        <input
          type="button"
          class="btn btn-outline-info btn-lg btn-block"
          value="Grade 11"
          @click="select('Grade11')"
        >
        <input
          type="button"
          class="btn btn-outline-info btn-lg btn-block"
          value="Grade 12"
          @click="select('Grade12')"
        >
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "GradeLevel",
  data() {
    return {
      //   selectedGradeLevel: ""
    };
  },

  methods: {
    select(value) {
      const userID = localStorage.getItem("userID");
      console.log(value);
      Axios.put("http://localhost:3000/api/v1/selectgradelevel", {
        userID,
        value
      })
        .then(response => {
          console.log(response);
          this.$router.go(-1);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
</style>
