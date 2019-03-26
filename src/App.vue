<template>
  <div id="app">
    <global-header></global-header>

    <!-- content -->
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import globalHeader from './components/header/global-header';

export default {
  name: 'app',
  components: {
    globalHeader,
  },
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
