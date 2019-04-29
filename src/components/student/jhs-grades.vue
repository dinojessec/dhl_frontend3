<template>
  <div class="container">
    <div
      class="row mb-2"
      v-if="editable === true"
    >
      <div class="col input-group">
        <select
          class="custom-select"
          v-model="input.subject"
          v-if="!this.showInput"
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
          <option value="add">Add Subject</option>
        </select>
        <button
          type="button"
          class="btn btn-primary"
          @click="changeInput()"
          v-if="input.subject === 'add'"
        >Add</button>
        <input
          autofocus
          type="text"
          class="form-control"
          placeholder="Add Subject"
          v-model="input.subject"
          v-if="this.showInput"
        >
        <input
          type="text"
          class="form-control"
          placeholder="1st Quarter"
          v-model="input.first"
          v-validate="{ numeric: true }"
          name="1st grading"
        >
        <input
          type="text"
          class="form-control"
          placeholder="2nd Quarter"
          v-model="input.second"
          v-validate="{ numeric: true }"
          name="2nd grading"
        >
        <input
          type="text"
          class="form-control"
          placeholder="3rd Quarter"
          v-model="input.third"
          v-validate="{ numeric: true }"
          name="3rd grading"
        >
        <input
          type="text"
          class="form-control"
          placeholder="4th Quarter"
          v-model="input.fourth"
          v-validate="{ numeric: true }"
          name="4th grading"
        >
        <input
          type="text"
          class="form-control"
          placeholder="Final"
          v-model="input.final"
          v-validate="{ numeric: true }"
          name="Final grading"
        >
        <button
          class="btn btn-primary btn-sm"
          @click="validateForm()"
        >Add</button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="err">{{ errors.first('1st grading') }}</div>
        <div class="err">{{ errors.first('2nd grading') }}</div>
        <div class="err">{{ errors.first('3rd grading') }}</div>
        <div class="err">{{ errors.first('4th grading') }}</div>
        <div class="err">{{ errors.first('Final grading') }}</div>
      </div>
    </div>

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
              v-for="(item, i) in this.gradeslist"
              :key="i"
            >
              <td>{{ item.jhs_subject }}</td>
              <td>{{ item.jhs_first_grade }}</td>
              <td>{{ item.jhs_second_grade }}</td>
              <td>{{ item.jhs_third_grade }}</td>
              <td>{{ item.jhs_fourth_grade }}</td>
              <td>{{ item.jhs_final_grade }}</td>
              <td><button
                  type="button"
                  class="close"
                  aria-label="Close"
                  @click="removeSubject(item.jhs_grade_id, item.studentID)"
                  v-if="editable === true"
                >
                  <span aria-hidden="true">&times;</span>
                </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row d-flex flex-row-reverse">
      <input
        type="text"
        class="form-control col-md-3"
        placeholder="Final Average"
        v-model="studentInfo.average"
        v-if="editable === true"
        v-validate="{ required: true, numeric: true }"
        name="average"
      >
      <div class="err">{{ errors.first('average') }}</div>
    </div>
    <!-- {{ gradeslist }} -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "jhs-grades",
  inject: ["$validator"],
  props: ["editable", "gradeslist", "studentInfo"],
  data() {
    return {
      showInput: false,
      selectedSubject: "",
      input: {},
      displaySubjects: this.gradeslist
    };
  },

  methods: {
    validateForm() {
      const valid = this.$validator.validateAll().then(result => {
        if (!result) {
          console.log("invalid input. some fields are empty", result);
        } else {
          this.addSubject();
        }
      });
    },
    addSubject() {
      if (this.input !== null) {
        const studentID = localStorage.getItem("studentID");
        console.log(studentID);
        const token = localStorage.getItem("token");
        const data = this.input;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        };
        axios
          .post(
            `http://localhost:3000/api/v1/profile/jhsgrades/${studentID}`,
            data,
            config
          )
          .then(result => {
            const inputVal = result;
          })
          .catch(err => {
            console.log(err);
          });
        this.input = {};
        this.showInput = false;
        this.$router.go();
      } else {
        alert("empty field");
      }
    },

    removeSubject(jhs_grade_id, studentID) {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      axios
        .put(
          `http://localhost:3000/api/v1/profile/jhsgrades/${studentID}`,
          { jhs_grade_id },
          config
        )
        .then(result => {
          const inputVal = result;
        })
        .catch(err => {
          console.log(err);
        });
      this.$router.go();
    },

    changeInput() {
      this.showInput = true;
      this.input.subject = "";
    }
  }
};
</script>

<style scoped>
.err {
  color: #ff0000;
}
</style>
