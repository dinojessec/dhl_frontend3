<template>
  <div class="container">
    <div class="form-row m-3">
      <div class="col">
        <div
          class="alert alert-danger"
          role="alert"
          v-if="responseMsg"
        >{{ responseMsg }}
        </div>
      </div>

    </div>
    <div class="form-row m-3">
      <div class="col">
        <div class="form-group">
          <input
            type="password"
            class="form-control shadow bg-white rounded"
            placeholder="Password"
            name="password"
            v-validate="'min:6'"
            ref="password"
            v-model="change.password"
          >
          <div class="err">{{ errors.first('password') }}</div>
        </div>
      </div>
    </div>

    <div class="form-row m-3">
      <div class="col">
        <div class="form-group">
          <input
            type="password"
            class="form-control shadow bg-white rounded"
            placeholder="Confirm Password"
            name="confirm password"
            v-validate="'required|confirmed:password'"
          >
          <div class="err">{{ errors.first('confirm password') }}</div>
        </div>
      </div>
    </div>

    <div class="form-row m-3">
      <div class="col">
        <div class="form-group">
          <button
            class="btn btn-primary"
            :disabled="errors.any()"
            @click="changePassword()"
          >Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "ChangePassword",
  data() {
    return {
      change: {
        password: ""
      },
      responseMsg: ""
    };
  },

  methods: {
    changePassword() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      axios;
      const user = localStorage.getItem("userID");
      const password = this.change.password;
      if (password === "") {
        console.log("password field empty");
        this.responseMsg = "Password field can't be empty..";
      } else {
        Axios.put(
          "http://localhost:3000/api/v1/changepassword",
          {
            user,
            password
          },
          config
        )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>

<style scoped>
.err {
  color: #ff0000;
}
</style>
