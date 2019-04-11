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
            v-if="!loggedIn"
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
            :to="{ name: 'profile', params: { userID: this.userID }}"
          >Profile</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/admin"
            exact
          >Admin</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/payment"
            exact
          >Payment</router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/"
            exact
          >User</router-link>
        </li>
        <li><button
            class="btn btn-light"
            v-if="loggedIn"
          >{{ currentUser }}</button></li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: ["groupID", "loggedIn"],
  data() {
    return {
      currentUser: localStorage.getItem("username"),
      userID: localStorage.getItem("userID")
    };
  },

  methods: {
    logout() {
      localStorage.clear();
      location.reload(false);
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
