<template>
  <div id="app">
    <global-header></global-header>

    <div class="content container-fluid mt-5">
      <router-view />
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
  background-color: #e0e0e0;
  display: table;
  height: 100%;
  width: 100%;
  margin: 1;
}
</style>
