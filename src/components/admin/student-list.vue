<template>

  <div class="container">

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
              <router-link :to="{ path: `/profile/${student.userID}`}">{{ student.firstName }} {{ student.middleName }} {{ student.lastName }}</router-link>
            </td>
            <td>{{ student.gradeLevel }}</td>
            <td>{{ student.strandName }}</td>
            <td>section</td>
            <td>{{ student.age }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.status }}</td>
            <td>approver</td>
          </tr>
        </tbody>
      </template>
    </table>

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
        console.log(response);
        console.log(response.data.response);
        this.allStudents = response.data.response;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style scoped>
</style>
