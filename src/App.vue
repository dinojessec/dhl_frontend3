<template>
  <div id="app">
    <global-header
      :loggedIn="loggedIn"
      :groupID="groupID"
      :userID="userID"
      :username="username"
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
      groupID: "",
      userID: "",
      username: ""
    };
  },

  created() {
    this.loggedIn = !!localStorage.getItem("token");
    this.userID = localStorage.getItem("userID");
    this.groupID = localStorage.getItem("groupID");
    this.username = localStorage.getItem("name");
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
