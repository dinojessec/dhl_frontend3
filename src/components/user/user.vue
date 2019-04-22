<template>
  <div class="container">
    <div class="form-row m-3">
      <div class="col"><input
          type="text"
          class="form-control"
          v-model="filter"
          placeholder="filter first name"
        ></div>
    </div>

    <div class="form-row mb-3">

      <div class="col-2">
        <h4>Search By:</h4>
      </div>

      <div class="col">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="1"
            v-model="selectedUser.roleID"
          >
          <label
            class="form-check-label"
            for="inlineRadio1"
          >Student</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="2"
            v-model="selectedUser.roleID"
          >
          <label
            class="form-check-label"
            for="inlineRadio2"
          >Teacher</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="3"
            v-model="selectedUser.roleID"
          >
          <label
            class="form-check-label"
            for="inlineRadio3"
          >Cashier</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio4"
            value="4"
            v-model="selectedUser.roleID"
          >
          <label
            class="form-check-label"
            for="inlineRadio4"
          >Admin</label>
        </div>
      </div>

      <div class="col">
        <button
          class="btn btn-primary"
          @click="getUser()"
        >Search</button>
      </div>

    </div>
    <div class="row">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">i</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>

          <tr
            v-for="(item, index) in filteredSearch"
            :key="item.ID"
          >
            <th scope="row">{{ index }}</th>
            <td>
              <router-link :to="{ path: `/profile/${item.userID}` }">{{ item.firstName }} {{ item.middleName }} {{ item.lastName }}</router-link>
            </td>
            <td>{{ item.roleName }}</td>
            <td><button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                :value="item.studentID"
              >Change Role</button>
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  href="#"
                  @click="updateRole(1, item.studentID)"
                >Student</a>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="updateRole(2, item.studentID)"
                >Teacher</a>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="updateRole(3, item.studentID)"
                >Cashier</a>
                <div
                  role="separator"
                  class="dropdown-divider"
                ></div>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="updateRole(4, item.studentID)"
                >Admin</a>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserComp",
  data() {
    return {
      searchResult: [],
      selectedUser: {
        roleID: ""
      },
      filter: ""
    };
  },

  methods: {
    getUser() {
      const roleID = this.selectedUser.roleID;
      // console.log(roleID);
      axios
        .get(`http://localhost:3000/api/v1/user/${roleID}`)
        .then(val => {
          const value = val.data.result;
          console.log(value);
          this.searchResult = value.slice(0, 20);
        })
        .catch(err => {
          throw err;
        });
    },

    updateRole(roleID, studentID) {
      // console.log(roleID);
      // console.log(studentID);
      const data = {
        roleID,
        studentID
      };
      axios
        .put(`http://localhost:3000/api/v1/user/`, data)
        .then(response => {
          console.log(response);
          this.$router.go();
        })
        .catch(e => {
          console.log("update role error", e);
        });
    }
  },

  computed: {
    filteredSearch() {
      return this.searchResult.filter(item => {
        return item.firstName.match(this.filter);
      });
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
