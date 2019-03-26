<template>

  <div class="container">
    {{ studentInfo }}
    {{ }}
    <div class="row p-1">
      <div class="col-12">
        <div
          class="alert alert-danger"
          role="alert"
        >
          This message will show if any of the required fields are empty
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
              <h4
                class=""
                v-if="editable === false"
              >{{ studentInfo.strand }}</h4>
              <select
                class="form-control shadow bg-white rounded"
                v-model="studentInfo.strand"
                v-if="editable === true"
                @click="getStrandList()"
              >
                <option
                  v-for="item in strandList"
                  :key="item.strandId"
                  v-bind:value="item.strandId"
                >{{ item.strandName }}</option>
              </select>
            </div>
          </div>
          <!-- grade level -->
          <div class="row">
            <div class="col">
              <h4
                class=""
                v-if="editable === false"
              >{{ studentInfo.gradeLevel }}</h4>
              <select
                class="form-control"
                v-if="editable === true"
                v-model="studentInfo.gradeLevel"
              >
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            </div>
          </div>
          <!-- LRN -->
          <div class="row">
            <div class="col">
              <h4
                class=""
                v-if="editable === false"
              >LRN</h4>
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
              <h4
                class=""
                v-if="editable === false"
              >Section</h4>
              <input
                type="text"
                class="form-control"
                placeholder="Section"
                v-model="studentInfo.section"
                v-if="editable === true"
              >
            </div>
          </div>
          <!-- <p>&nbsp;</p> -->
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
            <li class="nav-item">
              <a
                class="nav-link"
                id="grades-tab"
                data-toggle="tab"
                href="#Grades"
                role="tab"
                aria-controls="grades"
                aria-selected="false"
              >Grades</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-2 col-md-2 col-12">
        <button
          @click="editable = !editable"
          v-if="editable === false"
        >Edit Profile</button>
        <button
          @click="editable = !editable"
          v-if="editable === true"
        >Save Changes</button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 col-12">
        <div class="other-info">
          <h4 class="display-5">Account info</h4>
          <h6 class=""><strong>{{ studentInfo.username }}</strong></h6>
          <a
            href="#"
            class="badge badge-primary"
          >Change Password</a>
        </div>
        <button @click="getStudentInformation()">test button</button>
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
            <education-information></education-information>
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
import axios from 'axios';

import PersonalInformation from '../components/student/personal-information';
import AddressInformation from '../components/student/address-information';
import ParentInformation from '../components/student/parent-information';
import EducationInformation from '../components/student/education-information';

export default {
  name: 'Profile',
  // NOTE: define a prop that contains the value of profile get request
  components: {
    PersonalInformation,
    AddressInformation,
    ParentInformation,
    EducationInformation,
  },
  data() {
    return {
      editable: false,
      studentInfo: [],
      strandList: [],
    }
  },

  watch: {
    studentInfo: {
      handler(val) {
        const dataMap = val;
        console.log(dataMap);
        this.$store.commit('sendStudentInfoToState', dataMap);
      },
      deep: true,
    },
  },

  methods: {
    getStudentInformation() {
      axios.get('http://localhost:3000/api/v1/profile')
        .then((val) => {
          const queryResult = val.data.studentQuery[0];
          this.studentInfo = queryResult;
        })
        .catch((err) => {
          throw err;
        });
    },

    updateStudentInformation() {
      
    },
  },

};
</script>

<style lang="scss" scoped>
</style>
