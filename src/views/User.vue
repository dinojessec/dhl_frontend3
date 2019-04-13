<template>
  <div class="container">
    <div class="row">
      <user-component></user-component>
    </div>
  </div>
</template>

<script>
import UserComponent from "../components/user/user";
export default {
  name: "User",
  components: {
    UserComponent
  }
};
</script>

<style scoped>
</style>
