<template>
  <div class="container">
    <div class="form-row d-flex justify-content-center mb-3">
      <div class="col col-md-8">
        <input
          type="text"
          class="form-control"
          v-model="newStrand.strandName"
        >
      </div>
      <div class="col col-md-2">
        <button
          class="btn btn-primary"
          @click="addStrand()"
        >
          Add
        </button>
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item) in strandList"
              :key="item.strandID"
            >
              <th scope="row">{{ item.strandName }}</th>
              <th><button
                  class="btn btn-danger"
                  @click="removeStrand(item.strandID)"
                >remove</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Strand',
    data() {
        return {
          newStrand: {
            strandName: '',
          },
          strandList: [],
        }
    },

    created() {
    axios.get('http://localhost:3000/api/v1/admin/strand')
      .then((response) => {
        const loadStrand = response.data.strandData;
        this.strandList = loadStrand;
      })
      .catch((err) => {
        console.log(err);
      });
  },

    methods: {
      addStrand() {
        const val = this.newStrand;
        // console.log(val);
        
        axios.post('http://localhost:3000/api/v1/admin/strand', val)
            .then((res) => {
              const queryResquest = res.data;
              console.log(queryResquest);
            })
            .catch((err) => {
              console.log('failed', err);
            });
            window.location.reload(true);
      },

      removeStrand(index) {
        // console.log(index);
        const value = {
          id: index,
        }
      // console.log(value);
        axios.put('http://localhost:3000/api/v1/admin/strand', value)
          .then((res) => {
            const queryResquest = res;
            console.log(queryResquest);
            console.log('remove request');
          })
          .catch((err) => {
            console.log('remove request error', err);
          });
          window.location.reload(true);
      }
    },
    
}
</script>

<style>
</style>
