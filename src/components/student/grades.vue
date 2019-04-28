<template>
  <div class="container">
    <div class="row mb-2">
      <div
        class="col"
        v-if="editable === false"
      >
        <p>click <i>Edit Profile</i> to input grades from Junior High School</p>
      </div>
      <div
        class="col"
        v-if="editable === true"
      >
        <p>Select subject from the Dropdown</p>
      </div>
    </div>
    <div
      class="row mb-2"
      v-if="editable === true"
    >
      <div class="col input-group">
        <select
          class="custom-select"
          v-model="selectedSubject"
        >
          <option value="math">Math</option>
          <option value="english">English</option>
          <option value="filipino">Filipino</option>
          <option value="science">Science</option>
          <option value="ap">Araling Panlipunan</option>
          <option value="esp">Edukasyon sa Pagpapakatao (EsP)</option>
          <option value="epp">Edukasyong Pantahanan at Pangkabuhayan (EPP)</option>
          <option value="tle">Technology and Livelihood Education (TLE)</option>
          <option value="music">Music</option>
          <option value="arts">Arts</option>
          <option value="pe">Physical Education</option>
          <option value="health">Health</option>
        </select>
        <input
          type="text"
          class="form-control"
          placeholder="1st Quarter"
          v-model="input[selectedSubject + 1]"
          :readonly="!selectedSubject"
          v-validate="{ numeric: true }"
          name="1st grading"
        >
        <input
          type="text"
          class="form-control"
          placeholder="2nd Quarter"
          v-model="input[selectedSubject + 2]"
          :readonly="!selectedSubject"
          v-validate="{ numeric: true }"
          name="2nd grading"
        >
        <input
          type="text"
          class="form-control"
          placeholder="3rd Quarter"
          v-model="input[selectedSubject + 3]"
          :readonly="!selectedSubject"
          v-validate="{ numeric: true }"
          name="3rd grading"
        >
        <input
          type="text"
          class="form-control"
          placeholder="4th Quarter"
          v-model="input[selectedSubject + 4]"
          :readonly="!selectedSubject"
          v-validate="{ numeric: true }"
          name="4th grading"
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

    <div class="row">
      <div class="col">
        <div class="err">{{ errors.first('1st grading') }}</div>
        <div class="err">{{ errors.first('2nd grading') }}</div>
        <div class="err">{{ errors.first('3rd grading') }}</div>
        <div class="err">{{ errors.first('4th grading') }}</div>
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
                  v-if="editable === true"
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
  inject: ["$validator"],
  props: ["editable"],
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
        const objDataMap = Object.assign.apply(Object, [{}].concat(dataMap));
        // console.log("object", objDataMap);
        this.$store.commit("addJHSgrades", objDataMap);
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
.err {
  color: #ff0000;
}
</style>
