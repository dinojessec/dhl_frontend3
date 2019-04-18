<template>
  <div class="container">

    <div
      class="border rounded p-4"
      id="forPrint"
      v-for="student in checkoutStudent"
      :key="student.userID"
    >
      <div class="row m-2">
        <div class="col-8"><label class="text-muted">Fullname</label>
          <h3>{{ student.firstName | capitalize }} {{ student.middleName | capitalize }} {{ student.lastName | capitalize }}</h3>
        </div>
        <div class="col-4"><label class="text-muted">Date</label>
          <h4>{{ student.checkoutDate }}</h4>
        </div>
      </div>
      <hr>
      <div class="row m-2">
        <div class="col-6"><label class="text-muted">Strand</label>
          <h5>{{ student.strandName }}</h5>
        </div>
        <div class="col"><label class="text-muted">Grade Level</label>
          <h5>{{ student.gradeLevel }}</h5>
        </div>
        <div class="col"><label class="text-muted">Strand</label>
          <h5>Section</h5>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="card text-center">
            <div class="card-header">
              Subjects
            </div>
            <div class="card-body">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Schedule</th>
                    <th scope="col">Time</th>
                    <th scope="col">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Math</td>
                    <td>M-W-F</td>
                    <td>4pm-5:30pm</td>
                    <td>comments</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer text-muted">
              footer
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      class="btn btn-primary m-3"
      @click="print('forPrint')"
    >print</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "checkout",
  data() {
    return {
      checkoutStudent: []
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
      .get(`http://localhost:3000/api/v1/admin/checkout/${userID}`, config)
      .then(val => {
        const student = val.data;
        console.log(student);
        this.checkoutStudent = student;
      })
      .catch(err => {
        throw err;
      });
  },

  methods: {
    print(forPrint) {
      const contents = document.getElementById(forPrint).innerHTML;
      const originalContents = document.body.innerHTML;
      console.log(originalContents);

      document.body.innerHTML = contents;

      window.print();

      document.body.innerHTML = originalContents;
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

<style>
</style>
