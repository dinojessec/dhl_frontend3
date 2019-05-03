<template>
  <div class="container">
    <div
      class="alert "
      v-if="msg"
    >{{ msg }}</div>
    <div class="row mb-2">
      <label>Tuition Fee</label>
      <input
        type="text"
        class="form-control"
        placeholder="Input amount"
        v-model="payment.amount"
        v-validate="{ numeric: true }"
        name="amount"
      >
      <div class="err">{{ errors.first('amount') }}</div>
    </div>
    <div class="row mb-2">
      <label>School type</label>
      <select
        class="custom-select"
        v-model="payment.schoolType"
        v-validate="{ required: true }"
        name="school type"
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
        <option value="other">Other</option>
      </select>
      <div class="err">{{ errors.first('school type') }}</div>
    </div>
    <div class="row mb-2">
      <label>Semester</label>
      <select
        class="custom-select"
        v-model="payment.semester"
      >
        <option value="first">First</option>
        <option value="second">Second</option>
      </select>
    </div>
    <div class="row mb-2">
      <label>&nbsp;</label>
      <button
        class="btn btn-primary"
        @click="validate()"
        v-if="!errors.any()"
      >Save</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Payment",
  data() {
    return {
      payment: {},
      msg: ""
    };
  },

  methods: {
    validate() {
      const valid = this.$validator.validateAll().then(result => {
        if (!result) {
          console.log("invalid input. some fields are empty", result);
          // alert("invalid input. some fields are empty");
        } else {
          this.updateTuition();
          this.payment = {};
          // this.$router.go();
        }
      });
    },
    updateTuition() {
      const payload = this.payment;
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      axios
        .put(`http://localhost:3000/api/v1/payment`, payload, config)
        .then(response => {
          console.log(response);
          this.msg = response.data.message;
        })
        .catch(e => {
          console.log("error on updatetuition", e);
        });
    }
  }
};
</script>

<style scoped>
</style>
