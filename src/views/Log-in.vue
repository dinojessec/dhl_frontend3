<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Enter Username"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        >
      </div>
      <!-- <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> -->
      <button
        type="submit"
        class="btn btn-primary"
      >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style>
</style>
