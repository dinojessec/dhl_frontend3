<template>

  <div class="container">

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

        <template v-for="(student, index) in allStudents">
          <tbody :key="student.studentID">
            <tr>
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
        </template>
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
        this.allStudents = response.data.response;
      })
      .catch(e => {
        console.log(e);
      });
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
