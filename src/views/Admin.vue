<template>
  <div class="container">

    <router-link to="/admin/strand"></router-link>

  </div>
</template>

<script>
import axios from 'axios';

import Strand from '../components/strand/strand';

export default {
    name: 'Admin',
    components: {
        Strand,
    },
    data() {
        return {
            strandList: [],
        }
    },

    created() {
        axios.get('http://localhost:3000/api/v1/admin')
      .then((response) => {
        const loadStrand = response.data.strandData;
        this.strandList = loadStrand;
      })
      .catch((err) => {
        console.log(err);
      });
    },

}
</script>

<style>
</style>
