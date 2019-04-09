<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div
          class="alert alert-danger"
          role="alert"
          v-if="status === 404"
        >{{ response }}</div>
        <div
          class="alert alert-success"
          role="alert"
          v-if="status === 200"
        >{{ response }}</div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <!-- <form> -->
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter Username"
            v-model="userInput.username"
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            v-model="userInput.password"
          >
        </div>
        <button
          class="btn btn-primary"
          @click="login()"
        >Submit</button>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      userInput: {
        username: "",
        password: ""
      },
      response: "",
      status: "",
      hide: ""
    };
  },

  methods: {
    login() {
      const user = this.userInput.username;
      const pass = this.userInput.password;
      if (user === " " || pass === "") {
        this.response = "Please input username and password";
        this.status = 404;
      } else {
        const input = this.userInput;
        Axios.post("http://localhost:3000/api/v1/login", input)
          .then(response => {
            const res = response;
            console.log(res);
            const resStatus = res.data.status;
            const resMsg = res.data.message;
            this.response = resMsg;
            this.status = resStatus;
            const username = res.data.username;
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", username);
            this.$router.go(0);
            // this.$router.push({ path: `/profile/${resUserID}` });
            // location.reload();
          })
          .catch(err => {
            console.log("axios error", err);
          });
      }
    }
  }
};
</script>

<style>
</style>
