<template>
  <div id="app">
    <global-header
      :loggedIn="loggedIn"
      :username="username"
      :userID="userID"
      :roleID="roleID"
    ></global-header>

    <!-- content -->
    <div class="
      container-fluid
      mt-5">
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import globalHeader from "./components/header/global-header";

export default {
  name: "app",
  components: {
    globalHeader
  },
  data() {
    return {
      loggedIn: "",
      username: "",
      userID: "",
      roleID: ""
    };
  },

  created() {
    this.loggedIn = localStorage.getItem("token");
    this.username = localStorage.getItem("username");
    this.userID = localStorage.getItem("userID");
    this.roleID = localStorage.getItem("roleID");
  }
};
</script>


<style scoped>
.container {
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 15px;
}
</style>
