<template>
  <div class="header">

    <nav class="navbar navbar-dark bg-dark">
      <ul class="nav justify-content-center">
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
    </nav>

  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
};
</script>

<style scoped>
.nav-link {
  color: #eeeeee;
}
</style>
