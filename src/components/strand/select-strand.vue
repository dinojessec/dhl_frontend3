<template>

  <div class="container">
    <div class="form-row">
      <div class="col">
        <label>Select Strand</label>
        <select
          class="custom-select custom-select-lg mb-3"
          v-model="selectedStrand.newStrand"
          size="5"
        >
          <option
            v-for="item in strandlist"
            :key="item.strandID"
            :value="item"
          >{{ item.strandName }}</option>
        </select>
        <input
          type="submit"
          value="Update"
          class="btn btn-outline-primary"
          @click="saveNewStrand()"
        >
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
      selectedStrand: {}
    };
  },

  created() {
    Axios.get(`http://localhost:3000/api/v1/selectstrand`)
      .then(val => {
        console.log(val);
        this.strandlist = val.data.result;
      })
      .catch(err => {
        throw err;
      });
  },

  methods: {
    saveNewStrand() {
      const user = localStorage.getItem("userID");
      const newStrand = this.selectedStrand.newStrand;
      console.log(newStrand);
      Axios.put("http://localhost:3000/api/v1/selectstrand", {
        newStrand,
        user
      })
        .then(response => {
          console.log(response);
          this.$router.go(-1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
