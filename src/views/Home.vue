<template>
  <div class="container">
    <carousel
      :minSwipeDistance="8"
      :per-page="1"
      :autoplay="true"
      :navigationClickTargetSize="8"
      navigationPrevLabel
    >
      <slide>
        <h1>Welcome To Dee Hwa Liong Academy</h1>
      </slide>
      <slide>
        <h1><img src="../assets/53111054_2000350213415013_3805721025782480896_n.jpg" /></h1>
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
