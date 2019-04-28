<template>

  <div class="container">
    <!-- {{ studentInfo }} -->
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
      <div class="p-2 col-md-7 col-12 mb-1">
        <div class="profile-head">
          <!-- profile name -->
          <h2
            class="display-4"
            v-if="editable === false"
          >{{ studentInfo.firstName | capitalize }} {{ studentInfo.middleName | capitalize }} {{ studentInfo.lastName | capitalize }}</h2>
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
            <div
              class="col"
              v-if="editable === true"
            >
              <select
                v-model="studentInfo.strandID"
                class="custom-select"
              >
                <option
                  v-for="strand in strandlist"
                  :key="strand.strandID"
                  :value="strand.strandID"
                >{{ strand.strandName }}</option>
              </select>
            </div>
            <!-- if not editable -->
            <div class="col">
              <h4 v-if="editable === false">{{ studentInfo.strandName }}</h4>
            </div>
          </div>
          <!-- grade level -->
          <div class="row">
            <div class="col">
              <select
                v-model="studentInfo.gradeLevel"
                class="custom-select"
                v-if="editable === true"
              >
                <option value="Grade11">Grade 11</option>
                <option value="Grade12">Grade 12</option>
              </select>
              <!-- if not editable -->
              <h4 v-if="editable === false">{{ studentInfo.gradeLevel }}</h4>
            </div>
          </div>
          <!-- LRN -->
          <div class="row">
            <div class="col">
              <label>Learners Reference Number:</label>
              <h4
                class=""
                v-if="editable === false"
              >{{ studentInfo.LRN }}</h4>
              <input
                type="text"
                class="form-control"
                placeholder="input LRN"
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
            <li class="nav-item">
              <a
                class="nav-link"
                id="competency-tab"
                data-toggle="tab"
                href="#Competency"
                role="tab"
                aria-controls="competency"
                aria-selected="false"
              >Competency</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="competency-tab"
                data-toggle="tab"
                href="#Grades"
                role="tab"
                aria-controls="grades"
                aria-selected="false"
              >JHS Grades</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-2 col-md-2 col-12">
        <button
          type="button"
          class="btn btn-warning"
          @click="loadData()"
          v-if="editable === false"
        >Edit Profile</button>
        <button
          type="button"
          class="btn btn-info"
          @click.prevent="validateForm()"
          v-if="editable === true"
        >Save Changes</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-12">
        <div class="container other-info">
          <div class="align-items-start">
            <div class="col list-group">
              <!-- <router-link
                to="/selectstrand"
                class="list-group-item list-group-item-action"
              >Strand</router-link> -->
              <router-link
                to="/section"
                class="list-group-item list-group-item-action disabled"
              >Section</router-link>
              <!-- <router-link
                to="/selectgradelevel"
                class="list-group-item list-group-item-action"
              >Grade Level</router-link> -->
              <router-link
                :to="{ path: `/profile/student-payment/${this.$route.params.userID}` }"
                class="list-group-item list-group-item-action"
              >Payments</router-link>
              <p>&nbsp;</p>
              <p>
                <a
                  class="btn btn-primary"
                  data-toggle="collapse"
                  href="#account-info"
                  role="button"
                  aria-expanded="false"
                  aria-controls="account-inf"
                >Account Info</a>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="account-info"
                  >
                    <div class="card card-body">
                      <small class="text-muted">username:</small><strong>{{ studentInfo.username }}</strong>
                      <router-link to="/changepassword"><button class="btn btn-outline-info">Change Password</button></router-link>
                    </div>
                  </div>
                </div>
              </div>

              <hr>
              <div v-if="studentInfo.status">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  role="alert"
                  v-if="studentInfo.status === 'pending'"
                  :disabled="roleID < 2"
                  @click="approveStudent()"
                >
                  {{ studentInfo.status }}
                </button>
                <div
                  class="alert alert-success"
                  role="alert"
                  v-if="studentInfo.status === 'approved'"
                >
                  {{ studentInfo.status }}
                </div>
              </div>
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
            id="Competency"
            role="tabpanel"
            aria-labelledby="competency-tab"
          >
            <competency-information
              :editable="editable"
              :studentInfo="studentInfo"
            ></competency-information>
          </div>
          <div
            class="tab-pane fade"
            id="Grades"
            role="tabpanel"
            aria-labelledby="grades-tab"
          >
            <grades-information :editable="editable" :gradeslist="gradeslist" :studentInfo="studentInfo"></grades-information>
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
import CompetencyInformation from "../components/student/competency";
// import GradesInformation from "../components/student/grades";
import GradesInformation from "../components/student/jhs-grades";

export default {
  name: "Profile",
  components: {
    PersonalInformation,
    AddressInformation,
    ParentInformation,
    EducationInformation,
    CompetencyInformation,
    GradesInformation
  },
  data() {
    return {
      test: this.$store.state,
      editable: false,
      studentInfo: [],
      strandList: [],
      roleID: localStorage.getItem("roleID"),
      gradeslist: []
    };
  },

  created() {
    const token = localStorage.getItem("token");
    const userID = this.$route.params.userID;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    axios
      .get(`http://localhost:3000/api/v1/profile/${userID}`, config)
      .then(val => {
        // console.log(val);
        this.gradeslist = val.data.gradesQuery;
        const groupID = val.data.groupID;
        const userID = val.data.userID;
        const queryResult = val.data.info[0];
        const queryResultStrand = val.data.strandResult;
        this.studentInfo = queryResult;
        this.studentInfo.strandName = queryResultStrand.strandName;
        localStorage.setItem('studentID', queryResult.studentID);
      })
      .catch(err => {
        throw err;
      });
  },

  watch: {
    studentInfo: {
      handler(val) {
        const dataMap = val;
        // console.log(dataMap);
        this.$store.commit("sendStudentInfoToState", dataMap);
      },
      deep: true
    }
  },

  methods: {
    validateForm() {
      const valid = this.$validator.validateAll().then(result => {
        if (!result) {
          console.log("invalid input. some fields are empty", result);
          // alert("invalid input. some fields are empty");
        } else {
          this.updateStudentInformation();
          // this.$router.go();
        }
      });
    },

    updateStudentInformation() {
      const data = this.$store.getters.getStudentInfo;
      // console.log("student data", data);
      const userID = localStorage.getItem("userID");
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      axios
        .put(`http://localhost:3000/api/v1/profile/${userID}`, data, config)
        .then(result => {
          const inputVal = result;
        })
        .catch(err => {
          console.log(err);
        });
      this.editable = !this.editable;
    },

    approveStudent() {
      const roleID = localStorage.getItem("roleID");
      if (roleID < 2) {
        alert("please complete required input");
      } else {
        const token = localStorage.getItem("token");
        const studentID = this.$route.params.userID;
        // console.log(studentID);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        };
        axios
          .put(
            `http://localhost:3000/api/v1/profile/${studentID}/approve`,
            null,
            config
          )
          .then(response => {
            console.log("approve response", response);
          })
          .catch(e => {
            console.log(`error approving student ${e}`);
          });
        this.$router.go();
        // this.$router.go(-1);
      }
    },

    loadData() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      axios
        .get(`http://localhost:3000/api/v1/profile/strand`, config)
        .then(val => {
          this.strandlist = val.data.result;
          this.editable = !this.editable;
        })
        .catch(err => {
          throw err;
        });
    }
  },

  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
</style>
