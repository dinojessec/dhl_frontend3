<template>
  <div id="app">
    <global-header
      :loggedIn="loggedIn"
      :groupID="groupID"
      :userID="userID"
    ></global-header>

    <!-- content -->
    <div class="
      container-fluid
      mt-5">
      <div class="row">
        <div class="col">
          {{ groupID }}
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
      userID: ""
    };
  },

  created() {
    this.groupID = this.$store.getters.getGroupID;
    this.loggedIn = this.$store.getters.getToken;
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
