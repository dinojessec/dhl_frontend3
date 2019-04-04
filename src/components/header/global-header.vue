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
          >Log-in</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/profile"
            exact
            v-if="loggedIn"
          >Profile</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/admin"
            exact
            v-if="loggedIn"
          >Admin</router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: ["loggedIn"],
  data() {
    return {};
  },

  watch: {}
};
</script>

<style scoped>
.header {
  margin-bottom: 10px;
}
.nav-link {
  color: #eeeeee;
}
</style>
