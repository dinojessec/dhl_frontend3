<template>

  <div class="container">
    <div class="row mb-3">
      <div class="col-4">
        <label>Search By:</label>
        <select
          class="custom-select"
          v-model="searchBy"
          @change="getAllStrand()"
        >
          <option value="all">All</option>
          <option value="strand">Strand</option>
          <option value="gradelevel">Grade Level</option>
          <option value="age">Age(Ascending order)</option>
        </select>
      </div>
      <!-- // strand selection -->
      <div
        class="col-4"
        v-if="this.searchBy === 'strand'"
      >
        <label>&nbsp</label>
        <select
          class="custom-select"
          v-model="selectedStrand"
        >
          <option
            v-for="(strand, i) in strandList"
            :key="i"
            :value="strand.strandID"
          >{{ strand.strandName }}</option>
        </select>
      </div>
      <!-- // grade level selection -->
      <div
        class="col-4"
        v-if="this.searchBy === 'gradelevel'"
      >
        <label>&nbsp</label>
        <select
          class="custom-select"
          v-model="selectedGrade"
        >
          <option value="Grade11">Grade 11</option>
          <option value="Grade12">Grade 12</option>
        </select>
      </div>
      <div class="col-2">
        <label>&nbsp</label>
        <input
          v-if="this.searchBy === 'all'"
          type="button"
          class="btn btn-primary form-control"
          value="Search"
          @click="searchByAll()"
        >
        <input
          v-if="this.searchBy === 'strand'"
          type="button"
          class="btn btn-primary form-control"
          value="Search"
          @click="searchStrand()"
        >
        <input
          v-if="this.searchBy === 'gradelevel'"
          type="button"
          class="btn btn-primary form-control"
          value="Search"
          @click="searchGrade()"
        >
        <input
          v-if="this.searchBy === 'age'"
          type="button"
          class="btn btn-primary form-control"
          value="Search"
          @click="searchByAge()"
        >
      </div>
    </div>

    <!-- <div class="row mb-3">
      <div class="col-4">
        <label>Filter By:</label>
        <select
          class="custom-select"
          v-model="filterBy"
        >
          <option value="strandName">Strand</option>
          <option value="firstName">First Name</option>
          <option value="gender">Gender</option>
        </select>
      </div>

      <div class="col-5">
        <label>&nbsp</label>
        <input
          type="text"
          class="form-control"
          v-model="filter"
          placeholder="Filter Strand.."
          v-if="this.filterBy === 'strandName'"
        >
        <input
          type="text"
          class="form-control"
          v-model="filter"
          placeholder="Filter First Name.."
          v-if="this.filterBy === 'firstName'"
        >
        <input
          type="text"
          class="form-control"
          v-model="filter"
          placeholder="Filter Gender.."
          v-if="this.filterBy === 'gender'"
        >
      </div>
    </div> -->

    <!-- <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">LRN</th>
            <th scope="col">Name</th>
            <th scope="col">Strand</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">School Name</th>
            <th scope="col">School Location</th>
            <th scope="col">Graduation Date</th>
            <th scope="col">Final grade average</th>
            <th scope="col">Status</th>
            <th scope="col">Approver</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(student, i) in filteredSearch"
            :key="student.studentID"
          >
            <td scope="row">{{ i + 1 }}</td>
            <td>{{ student.LRN }}</td>
            <td>
              <router-link :to="{ path: `/profile/${student.userID}`}">{{ student.firstName | capitalize }} {{ student.middleName | capitalize }} {{ student.lastName | capitalize }}</router-link>
            </td>
            <td>{{ student.strandCode }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.juniorHighSchool }}</td>
            <td>{{ student.jhsLocation }}</td>
            <td>{{ student.formattedJhsYear }}</td>
            <td>{{ student.jhs_average }}</td>
            <td>
              <div
                class="alert alert-danger mb-0"
                v-if="student.status === 'pending'"
              >{{ student.status }}</div>
              <router-link
                :to="{ path: `/admin/checkout/${student.userID}` }"
                v-if="student.status === 'approved'"
              ><button
                  type="button"
                  class="btn btn-outline-success mb-0"
                >{{ student.status }}</button></router-link>
            </td>
            <td>{{ student.approvedBy }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <div id="filter-table">
      <v-client-table
        :data="filteredSearch"
        :columns="columns"
        :options="options"
      >
        <a
          slot="Fullname"
          slot-scope="props"
          :href="props.row.path"
        >{{ props.row.Fullname | capitalize }}</a>
        <a
          slot="status"
          slot-scope="props"
          :href="props.row.checkout"
          v-if="props.row.status === 'approved'"
        >{{ props.row.status }}</a>
      </v-client-table>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentList",
  data() {
    return {
      // columns StudentList
      columns: [
        "LRN",
        "Fullname",
        "strandCode",
        "Age",
        "gender",
        "jhsName",
        "juniorHighSchool",
        "formattedJhsYear",
        "jhs_average",
        "status",
        "approvedBy"
      ],
      options: {
        headings: {
          strandCode: "Strand",
          jhsName: "School Name",
          juniorHighSchool: "School Location",
          formattedJhsYear: "Year Graduated",
          jhs_average: "Final Grade",
          path: "Link"
        }
      },
      searchResult: [],
      gradeResult: [],
      filter: "",
      // selected filter
      filterBy: "firstName",
      searchBy: "",
      // pull up strand
      selectedStrand: "",
      selectedGrade: "",
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
      .get(`http://localhost:3000/api/v1/admin/student`, config)
      .then(response => {
        console.log(response);
        this.searchResult = response.data.response;
        this.gradeResult = response.data.gradesRes;
        // this.searchResult = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  },

  methods: {
    // getLastWord(strandName) {
    //   const last = strandName.split(" ").splice(-1);
    //   // return last[last.length - 1];
    //   return last[0].replace(/[()]/g, "");
    // },
    searchByAll() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      axios
        .get(`http://localhost:3000/api/v1/admin/student`, config)
        .then(response => {
          console.log(response);
          this.searchResult = response.data.response;
          this.gradeResult = response.data.gradesRes;
          // this.searchResult = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchStrand() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      const param = this.selectedStrand;
      axios
        .get(
          `http://localhost:3000/api/v1/admin/student/strand/${param}`,
          config
        )
        .then(response => {
          this.searchResult = response.data.response;
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchGrade() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      const param = this.selectedGrade;
      axios
        .get(
          `http://localhost:3000/api/v1/admin/student/gradelevel/${param}`,
          config
        )
        .then(response => {
          this.searchResult = response.data.response;
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchByAge() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      axios
        .get(`http://localhost:3000/api/v1/admin/student/age`, config)
        .then(response => {
          this.searchResult = response.data.response;
        })
        .catch(e => {
          console.log(e);
        });
    },

    getAllStrand() {
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
    }
  },

  computed: {
    filteredSearch() {
      const filterRes = this.filterBy;
      return this.searchResult.filter(item => {
        const value = item[filterRes];
        return value.match(this.filter);
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
.container {
  max-width: 1500px;
}
tbody {
  display: block;
  height: 600px;
  overflow: auto;
}
thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
thead {
  width: calc(100% - 1em);
}
</style>
