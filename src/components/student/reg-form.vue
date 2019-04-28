<template>
  <div class="container">
    <form>
      <div class="card text-center">
        <div class="card-header">
          Create an Account
        </div>
        <div class="card-body">
          <form>
            <div class="form-row">
              <div class="form-group col-12 col-md-4">
                <label>First Name</label>
                <input
                  type="text"
                  class="form-control shadow bg-white rounded"
                  placeholder="First name"
                  v-model="student.firstName"
                  autofocus
                  name="First Name"
                  v-validate="{ required: true, alpha_spaces: true }"
                >
                <div class="err">{{ errors.first('First Name') }}</div>
              </div>
              <div class="form-group col-12 col-md-4">
                <label>Middle Name</label>
                <input
                  type="text"
                  class="form-control shadow bg-white rounded"
                  placeholder="Middle name"
                  v-model="student.middleName"
                  name="Middle Name"
                  v-validate="{ required: true, alpha_spaces: true }"
                >
                <div class="err">{{ errors.first('Middle Name') }}</div>
              </div>
              <div class="form-group col-12 col-md-4">
                <label>Last Name</label>
                <input
                  type="text"
                  class="form-control shadow bg-white rounded"
                  placeholder="Last name"
                  v-model="student.lastName"
                  name="Last Name"
                  v-validate="{ required: true, alpha_spaces: true }"
                >
                <div class="err">{{ errors.first('Last Name') }}</div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-12 col-md-4">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  v-model="student.username"
                  readonly
                >
              </div>
              <div class="form-group col-12 col-md-2">
                <label>&nbsp;</label>
                <button
                  type="button"
                  class="form-control btn-primary"
                  @click="generateUser()"
                >Generate</button>
              </div>
              <div class="form-group col-12 col-md-3">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control shadow bg-white rounded"
                  placeholder="Password"
                  v-model="student.password"
                  name="password"
                  v-validate="'min:6'"
                  ref="password"
                >
                <div class="err">{{ errors.first('password') }}</div>
              </div>
              <div class="form-group col-12 col-md-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  class="form-control shadow bg-white rounded"
                  placeholder="Confirm Password"
                  name="password"
                  v-validate="'required|confirmed:password'"
                >
                <div class="err">{{ errors.first('Confirm Password') }}</div>
              </div>
            </div>
          </form>
          <!-- card body end -->
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "reg-form",
  inject: ["$validator"],
  props: ["strandList", "saveStudent"],
  data() {
    return {
      student: {
        firstName: "",
        middleName: "",
        lastName: "",
        username: ""
      }
    };
  },

  watch: {
    student: {
      handler(val) {
        const dataMap = val;
        this.$store.commit("studentStateChange", dataMap);
      },
      deep: true
    }
  },

  methods: {
    generateUser() {
      const wholeFirstName = this.student.firstName;
      const firstName = wholeFirstName.replace(/ .*/, "");
      const middleName = this.student.middleName;
      const lastName = this.student.lastName;

      if (
        typeof firstName !== "undefined" &&
        typeof middleName !== "undefined" &&
        typeof lastName !== "undefined"
      ) {
        const username = `${lastName}${firstName}${middleName.charAt(0)}`;
        this.student.username = username.replace(/\s/g, "").toLowerCase();
      }
    }
  }
};
</script>

<style scoped>
.err {
  color: #ff0000;
}
</style>
