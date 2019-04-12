<template>
  <div class="container">

    <router-link to="/admin/strand"><button
        type="button"
        class="btn btn-outline-primary btn-lg btn-block mb-2"
      >Strand</button></router-link>
    <router-link to="/admin/studentlist">
      <button
        type="button"
        class="btn btn-outline-primary btn-lg btn-block mb-2"
      >Student</button></router-link>
    <button
      type="button"
      class="btn btn-outline-primary btn-lg btn-block mb-2"
    >Section</button>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Admin",
  data() {
    return {};
  }
};
</script>

<style>
</style>
