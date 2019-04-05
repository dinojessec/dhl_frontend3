<template>
  <div class="header">

    <nav class="navbar navbar-dark bg-dark">
      <ul class="nav d-flex flex-row">
        <li>
          <router-link
            class="nav-link"
            to="/"
            exact
          >Home</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/about"
            exact
          >About</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/register"
            exact
          >Register</router-link>
        </li>
      </ul>

      <ul class="nav d-flex flex-row-reverse">
        <li>
          <router-link
            class="nav-link"
            to="/login"
            exact
            v-if="!loggedIn"
          >Log-in</router-link>
          <router-link
            class="nav-link"
            to="/"
            exact
            v-if="loggedIn"
            @click.native="logout()"
          >Log-out</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            :to="{ path: '/profile/' + this.userID }"
            exact
            v-if="groupID >= 1"
          >Profile</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/admin"
            exact
            v-if="groupID >= 2"
          >Admin</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/"
            exact
            v-if="groupID >= 3"
          >User</router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: ["groupID", "userID", "loggedIn"],
  data() {
    return {};
  },

  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    }
  }
};
</script>

<style scoped>
.header {
  margin-bottom: 10px;
}
.nav-link {
  color: #eeeeee;
}
.logout {
  color: #eeeeee;
}
</style>
