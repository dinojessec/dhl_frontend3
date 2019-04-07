<template>

  <div class="container">
    <div class="form-row">
      <div class="col">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Strand List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th v-model="selectedStrand">test</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import Axios from "axios";

export default {
  name: "SelectStrand",
  data() {
    return {
      strandlist: [],
      selectedStrand: ""
    };
  },

  created() {
    const user = localStorage.getItem("userID");
    // console.log(user);
    // Axios.get("http://localhost:3000/api/v1/profile/" + this.ID)
    //   .then(val => {
    //     // console.log(val);
    //     const queryResult = val.data.info[0];
    //     const queryResultStrand = val.data.strand;
    //     // console.log(queryResult);
    //     this.studentInfo = queryResult;
    //     this.studentInfo.strandName = queryResultStrand;
    //   })
    //   .catch(err => {
    //     throw err;
    //   });
  }
};
</script>

<style>
</style>
