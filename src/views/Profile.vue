<template>

  <div class="container">
    {{ studentInfo }}
    <div class="row p-1">
      <div class="col-12">
        <div
          class="alert alert-danger"
          role="alert"
          v-if="errors.any()"
        >
          <ul>
            <li
              v-for="error in errors.all()"
              :key="error"
            >{{ error }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row p-2">
      <div class="p-2 col-md-3 col-12">
        <div class="profile-img">
          <img
            src="../assets/avatar.png"
            class="img-thumbnail rounded float-left"
            alt=""
          />
        </div>
      </div>
      <div class="p-2 col-md-7 col-12">
        <div class="profile-head">
          <!-- profile name -->
          <h1
            class="display-4"
            v-if="editable === false"
          >{{ studentInfo.firstName }} {{ studentInfo.middleName}} {{ studentInfo.lastName }}</h1>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                v-model="studentInfo.firstName"
                v-if="editable === true"
              >
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Middle Name"
                v-model="studentInfo.middleName"
                v-if="editable === true"
              >
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                v-model="studentInfo.lastName"
                v-if="editable === true"
              >
            </div>
          </div>
          <!-- strand -->
          <div class="row">
            <div class="col">
              <h4>{{ studentInfo.strandName }}</h4>
            </div>
          </div>
          <!-- grade level -->
          <div class="row">
            <div class="col">
              <h4>{{ studentInfo.gradeLevel }}</h4>
            </div>
          </div>
          <!-- LRN -->
          <div class="row">
            <div class="col">
              <h4
                class=""
                v-if="editable === false"
              >{{ studentInfo.LRN }}</h4>
              <input
                type="text"
                class="form-control"
                placeholder="LRN"
                v-model="studentInfo.LRN"
                v-if="editable === true"
              >
            </div>
          </div>
          <!-- section -->
          <div class="row">
            <div class="col">
              <h4>{{ studentInfo.section }}</h4>
            </div>
          </div>
          <p>&nbsp;</p>
          <ul
            class="nav nav-tabs"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                id="profile-tab"
                data-toggle="tab"
                href="#Profile"
                role="tab"
                aria-controls="profiile"
                aria-selected="true"
              >Profile</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="address-tab"
                data-toggle="tab"
                href="#Address"
                role="tab"
                aria-controls="address"
                aria-selected="false"
              >Address</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="parent-tab"
                data-toggle="tab"
                href="#Parent"
                role="tab"
                aria-controls="parent"
                aria-selected="false"
              >Parent</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="education-tab"
                data-toggle="tab"
                href="#Education"
                role="tab"
                aria-controls="education"
                aria-selected="false"
              >Education</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-2 col-md-2 col-12">
        <button
          type="button"
          class="btn btn-warning"
          @click="editable = !editable"
          v-if="editable === false"
        >Edit Profile</button>
        <button
          type="button"
          class="btn btn-info"
          @click="updateStudentInformation()"
          v-if="editable === true"
        >Save Changes</button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 col-12">
        <div class="container other-info">
          <div class="align-items-start">
            <div class="col">
              <h5>
                <router-link to="/strand">Strand</router-link>
              </h5>
              <h5>
                <router-link to="/section">Section</router-link>
              </h5>
              <h5>
                <router-link to="/gradelevel">Grade Level</router-link>
              </h5>
              <p>&nbsp;</p>
              <h4 class="display-5">Account info</h4>
              <h5 class="mb-2"><strong>{{ studentInfo.username }}</strong></h5>
              <button class="btn btn-primary btn-sm mb-2">Change Password</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-9">
        <div
          class="tab-content profile-tab"
          id="myTabContent"
        >
          <div
            class="tab-pane fade show active"
            id="Profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <personal-information
              :editable="editable"
              :studentInfo="studentInfo"
            ></personal-information>
          </div>
          <div
            class="tab-pane fade"
            id="Address"
            role="tabpanel"
            aria-labelledby="address-tab"
          >
            <address-information
              :editable="editable"
              :studentInfo="studentInfo"
            ></address-information>
          </div>
          <div
            class="tab-pane fade"
            id="Parent"
            role="tabpanel"
            aria-labelledby="parent-tab"
          >
            <parent-information
              :editable="editable"
              :studentInfo="studentInfo"
            ></parent-information>
          </div>
          <div
            class="tab-pane fade"
            id="Education"
            role="tabpanel"
            aria-labelledby="education-tab"
          >
            <education-information
              :editable="editable"
              :studentInfo="studentInfo"
            ></education-information>
          </div>
          <div
            class="tab-pane fade"
            id="Grades"
            role="tabpanel"
            aria-labelledby="grades-tab"
          >
            grades
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import axios from "axios";

import PersonalInformation from "../components/student/personal-information";
import AddressInformation from "../components/student/address-information";
import ParentInformation from "../components/student/parent-information";
import EducationInformation from "../components/student/education-information";

export default {
  name: "Profile",
  // NOTE: define a prop that contains the value of profile get request
  components: {
    PersonalInformation,
    AddressInformation,
    ParentInformation,
    EducationInformation
  },
  data() {
    return {
      editable: false,
      studentInfo: [],
      strandList: []
    };
  },

  created() {
    this.getStudentInformation();
  },

  watch: {
    studentInfo: {
      handler(val) {
        const dataMap = val;
        this.$store.commit("sendStudentInfoToState", dataMap);
      },
      deep: true
    }
  },

  methods: {
    getStudentInformation() {
      const clientID = localStorage.getItem("userID");
      axios
        .get(`http://localhost:3000/api/v1/profile/${clientID}`)
        .then(val => {
          // console.log(val);
          const queryResult = val.data.info[0];
          const queryResultStrand = val.data.strand;
          // console.log(queryResult);
          this.studentInfo = queryResult;
          this.studentInfo.strandName = queryResultStrand;
        })
        .catch(err => {
          throw err;
        });
    },

    // capitalizeFirstLetter(string) {
    //   return string.charAt(0).toUpperCase() + string.slice(1);
    // },

    updateStudentInformation() {
      const updatedInfo = this.$store.getters.getStudentInfo;
      console.log(updatedInfo);
      axios
        .put("http://localhost:3000/api/v1/profile", updatedInfo)
        .then(result => {
          const inputVal = result;
          console.log("axios put request result", inputVal);
        })
        .catch(err => {
          console.log(err);
        });
      this.editable = !this.editable;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
