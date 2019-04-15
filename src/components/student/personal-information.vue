<template>
  <div class="container">
    <div class="form-row p-2">
      <div class="col-5">
        <label>Birthday</label>
        <input
          disabled
          type="text"
          class="form-control"
          :value="studentInfo.formatedBirthday"
          v-if="editable === false"
        >
        {{ dateFormat }}
        <date-picker
          placeholder="Input Birthday"
          name="birthday"
          v-model="birth"
          :format="'YYYY/MM/DD'"
          lang="en"
          v-if="editable === true"
        ></date-picker>
      </div>
      <div class="col-3">
        <label>Age</label>
        <input
          readonly
          type="text"
          class="form-control"
          :value="studentInfo.age"
        >
      </div>
      <div class="col-4">
        <label>Gender</label>
        <input
          readonly
          type="text"
          class="form-control"
          placeholder="Gender"
          :value="studentInfo.gender"
          v-if="editable === false"
        >
        <select
          class="form-control"
          v-model="studentInfo.gender"
          name="gender"
          v-if="editable === true"
          v-validate="{ required: true }"
        >
          <div class="err">{{ errors.first('gender') }}</div>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>

    <div class="form-row p-2">
      <div class="col">
        <label>Email</label>
        <input
          readonly
          class="form-control"
          :value="studentInfo.email"
          placeholder="Email"
          v-if="editable === false"
        >
        <input
          type="text"
          name="email"
          class="form-control"
          v-model="studentInfo.email"
          placeholder="Email"
          v-if="editable === true"
          v-validate="{ required: true, email: true }"
        >
        <div class="err">{{ errors.first('email') }}</div>
      </div>
      <div class="col">
        <label>Mobile Number</label>
        <input
          readonly
          class="form-control"
          :value="studentInfo.mobileNumber"
          v-if="editable === false"
        >
        <input
          type="text"
          name="mobile number"
          class="form-control"
          v-model="studentInfo.mobileNumber"
          placeholder="Mobile Number"
          v-if="editable === true"
          v-validate="{ required: true, digits:10 }"
        >
        <div class="err">{{ errors.first('mobile number') }}</div>
      </div>
      <div class="col">
        <label>Landline Number</label>
        <input
          readonly
          class="form-control"
          :value="studentInfo.landlineNumber"
          v-if="editable === false"
        >
        <input
          type="text"
          name="landline number"
          class="form-control"
          v-model="studentInfo.landlineNumber"
          placeholder="Landline Number"
          v-if="editable === true"
          v-validate="{ required: true, digits: 10 }"
        >
        <div class="err">{{ errors.first('landline number') }}</div>
      </div>
    </div>
    <hr>
    <div class="form-row p-2">
      <!-- ethnicGroup -->
      <div class="col-md-6">
        <label>Ethnic Group</label>
        <input
          readonly
          type="text"
          class="form-control"
          v-model="studentInfo.ethnicGroup"
          placeholder="Ethnic Group"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.ethnicGroup"
          placeholder="Ethnic Group"
          v-if="editable === true"
        >
      </div>
      <!-- motherTongue -->
      <div class="col-md-6">
        <label>Mother Tongue</label>
        <input
          readonly
          type="text"
          class="form-control"
          v-model="studentInfo.motherTongue"
          placeholder="Mother Tongue"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.motherTongue"
          placeholder="Mother Tongue"
          v-if="editable === true"
        >
      </div>
    </div>
    <hr>
    <div class="form-row p-2">
      <div class="col">
        <label>Religion</label>
        <input
          readonly
          type="text"
          class="form-control"
          v-model="studentInfo.religion"
          placeholder="Religion"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.religion"
          placeholder="Religion"
          v-if="editable === true"
        >
      </div>
    </div>
    <hr>
    <div class="form-row p-2">
      <div class="col">
        <label>Preferred Shift</label>
        <input
          readonly
          type="text"
          class="form-control"
          v-model="studentInfo.preferredShift"
          placeholder="Preferred Shift"
          v-if="editable === false"
        >
        <select
          type="text"
          class="form-control"
          name="shift"
          v-model="studentInfo.preferredShift"
          placeholder="Preferred Shift"
          v-if="editable === true"
          v-validate="{ required: true }"
        >
          <div class="err">{{ errors.first('shift') }}</div>
          <option value="am">A.M.</option>
          <option value="pm">P.M.</option>
        </select>
      </div>
      <div class="col">
        <label>Referred By:</label>
        <input
          readonly
          type="text"
          class="form-control"
          v-model="studentInfo.referredBy"
          placeholder="Referred By"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.referredBy"
          placeholder="Referred By"
          v-if="editable === true"
        >
      </div>
    </div>

  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";

export default {
  name: "PersonalInformation",
  inject: ["$validator"],
  props: ["editable", "studentInfo"],
  components: {
    DatePicker
  },
  data() {
    return {
      birth: ""
    };
  },

  watch: {
    dateFormat: {
      handler(val) {
        const dataMap = this.dateFormat;
        this.$store.dispatch("passNewBirthday", dataMap);
      },
      deep: true
    }
  },

  computed: {
    dateFormat: {
      cache: false,
      get() {
        let date = new Date(this.birth);
        const newDate =
          date.getFullYear() +
          "/" +
          ("0" + (date.getMonth() + 1)).slice(-2) +
          "/" +
          ("0" + date.getDate()).slice(-2);
        return newDate;
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
