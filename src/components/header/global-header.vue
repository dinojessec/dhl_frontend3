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
            to="/profile"
            exact
          >Profile</router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
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
