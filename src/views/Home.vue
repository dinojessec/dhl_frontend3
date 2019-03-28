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
        <strand></strand>
      </slide>
    </carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import Strand from '../components/strand/strand';

export default {
  name: 'home',
  components: {
    Strand,
  },
};
</script>
