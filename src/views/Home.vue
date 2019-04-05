<template>
  <div class="container">
    <carousel
      :minSwipeDistance="8"
      :per-page="1"
    >
      <slide>
        <h1>Welcome to DHL</h1>
      </slide>
      <slide>
        <h1>Slide 2</h1>
      </slide>
    </carousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import Strand from '../components/strand/strand';

export default {
  name: "home",
  components: {}
};
</script>
