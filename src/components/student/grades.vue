<template>
  <div class="container">
    <!-- <div class="row mb-2">
      <div class="col">

        {{ data }}
      </div>
    </div> -->
    <div class="row mb-2">
      <div class="col input-group">
        <select
          class="custom-select"
          v-model="selectedSubject"
        >
          <option value="math">Math</option>
          <option value="english">English</option>
        </select>
        <input
          type="text"
          class="form-control"
          placeholder="1st Quarter"
          v-model="input[selectedSubject + 1]"
          :readonly="!selectedSubject"
        >
        <input
          type="text"
          class="form-control"
          placeholder="2nd Quarter"
          v-model="input[selectedSubject + 2]"
          :readonly="!selectedSubject"
        >
        <input
          type="text"
          class="form-control"
          placeholder="3rd Quarter"
          v-model="input[selectedSubject + 3]"
          :readonly="!selectedSubject"
        >
        <input
          type="text"
          class="form-control"
          placeholder="4th Quarter"
          v-model="input[selectedSubject + 4]"
          :readonly="!selectedSubject"
        >
        <input
          type="text"
          class="form-control"
          placeholder="Final"
          v-model="input[selectedSubject + 5]"
          :readonly="!selectedSubject"
        >
        <button
          class="btn btn-primary btn-sm"
          @click="addSubject()"
          :hidden="!selectedSubject"
        >Add</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">First</th>
              <th scope="col">Second</th>
              <th scope="col">Third</th>
              <th scope="col">Fourth</th>
              <th scope="col">Final</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in data"
              :key="index"
            >
              <th scope="row">{{ Object.keys(item)[0] | capitalize }}</th>
              <td>{{ Object.values(item)[0] }}</td>
              <td>{{ Object.values(item)[1] }}</td>
              <td>{{ Object.values(item)[2] }}</td>
              <td>{{ Object.values(item)[3] }}</td>
              <td>{{ Object.values(item)[4] }}</td>
              <td><button
                  type="button"
                  class="close"
                  aria-label="Close"
                  @click="data.splice(index, 1)"
                >
                  <span aria-hidden="true">&times;</span>
                </button></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHSgrades",
  data() {
    return {
      selectedSubject: "",
      input: {},
      data: []
    };
  },

  watch: {
    data: {
      handler(val) {
        const dataMap = val;
        console.log(dataMap);
        // CONVERT ARRAY TO OBJECT BEFORE COMMIT
        // Object.assign.apply(Object, [{}].concat(sources));
        // this.$store.commit("sendStudentInfoToState", dataMap);
      },
      deep: true
    }
  },

  methods: {
    addSubject() {
      if (!this.input) {
        alert("Invalid input");
      } else {
        this.data.push(this.input);
        this.input = {};
      }
    }
  },

  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString().slice(0, -1);
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
</style>
