<template>

  <div class="container">
    <div class="row mb-3">
      <div class="col-4">
        <input
          type="text"
          class="form-control"
          v-model="filter"
          placeholder="Filter Search.."
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Grade Level</th>
            <th scope="col">Strand</th>
            <th scope="col">Section</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
            <th scope="col">Approver</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(student, index) in filteredSearch"
            :key="student.studentID"
          >
            <th scope="row">{{ index }}</th>
            <td>
              <router-link :to="{ path: `/profile/${student.userID}`}">{{ student.firstName | capitalize }} {{ student.middleName | capitalize }} {{ student.lastName | capitalize }}</router-link>
            </td>
            <td>{{ student.gradeLevel }}</td>
            <td>{{ student.strandName }}</td>
            <td>section</td>
            <td>{{ student.age }}</td>
            <td>{{ student.gender }}</td>
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
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "StudentList",
  data() {
    return {
      searchResult: [],
      filter: "",
      allStudents: []
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
        this.searchResult = response.data.response;
        // this.searchResult = response.data;
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },

  computed: {
    filteredSearch() {
      return this.searchResult.filter(item => {
        return item.firstName.match(this.filter);
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
