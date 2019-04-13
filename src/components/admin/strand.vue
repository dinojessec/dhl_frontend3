<template>
  <div class="container">
    <div class="form-row d-flex justify-content-center mb-3">
      <div class="col col-md-8">
        <input
          type="text"
          class="form-control"
          v-model="newStrand.strandName"
          v-validate="{required: true}"
          name="strand"
        >
        <div class="err">{{ errors.first('strand') }}</div>
      </div>
      <div class="col col-md-2">
        <button
          class="btn btn-primary"
          @click="validateInput()"
        >
          Add
        </button>
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <table class="table">
          <thead class="thead-dark">
            <tr class="">
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
import axios from "axios";

export default {
  name: "Strand",
  data() {
    return {
      newStrand: {
        strandName: ""
      },
      strandList: []
    };
  },

  created() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    axios
      .get("http://localhost:3000/api/v1/admin/strand", config)
      .then(response => {
        const loadStrand = response.data.strandData;
        this.strandList = loadStrand;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    validateInput() {
      const valid = this.$validator.validateAll().then(result => {
        if (!result) {
          console.log("invalid inut. some fields are empty", result);
        } else {
          this.addStrand();
        }
      });
    },

    addStrand() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      const val = this.newStrand;
      axios
        .post("http://localhost:3000/api/v1/admin/strand", val, config)
        .then(res => {
          const queryResquest = res.data;
        })
        .catch(err => {
          console.log("failed", err);
        });
      window.location.reload(true);
    },

    removeStrand(index) {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      axios;
      const value = {
        id: index
      };
      axios
        .put("http://localhost:3000/api/v1/admin/strand", value, config)
        .then(res => {
          const queryResquest = res;
        })
        .catch(err => {
          console.log("remove request error", err);
        });
      window.location.reload(true);
    }
  }
};
</script>

<style scoped>
.err {
  color: rgb(240, 4, 4);
}
</style>
