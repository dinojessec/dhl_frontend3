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
    // console.log(this.$store.state);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    Axios.get(`http://localhost:3000/api/v1/selectstrand`, config)
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
      const token = localStorage.getItem("token");
      const newStrand = this.selectedStrand.newStrand;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      Axios.put(`http://localhost:3000/api/v1/selectstrand`, newStrand, config)
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
