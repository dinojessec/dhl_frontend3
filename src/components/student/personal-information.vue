<template>
  <div class="container">

    <div class="form-row p-2">
      <div class="col-5">
        <label>Birthday</label>
        <input
          type="date"
          class="form-control"
          v-model="studentInfo.birthday"
        >
      </div>
      <div class="col-3">
        <label>Age</label>
        <input
          readonly
          type="text"
          class="form-control"
          placeholder="Age true"
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
          v-validate="'included:male,female'"
          name="gender"
          v-if="editable === true"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>

    <div class="form-row p-2">
      <div class="col">
        <input
          readonly
          class="form-control"
          :value="studentInfo.email"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.email"
          placeholder="Email"
          v-if="editable === true"
        >
      </div>
      <div class="col">
        <input
          readonly
          class="form-control"
          :value="studentInfo.mobileNumber"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.mobileNumber"
          placeholder="Mobile Number"
          v-if="editable === true"
        >
      </div>
      <div class="col">
        <input
          readonly
          class="form-control"
          :value="studentInfo.landlineNumber"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.landlineNumber"
          placeholder="Landline Number"
          v-if="editable === true"
        >
      </div>
    </div>

    <div class="form-row p-2">
      <!-- ethnicGroup -->
      <div class="col">
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
      <div class="col">
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

    <div class="form-row p-2">
      <!-- religion -->
      <div class="col col-md-6">
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
      <div class="col col-md-6">
        <input
          readonly
          type="text"
          class="form-control"
          v-model="studentInfo.guardian"
          placeholder="Guardian"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.guardian"
          placeholder="Guardian"
          v-if="editable === true"
        >
      </div>
    </div>

    <div class="form-row p-2">
      <div class="col">
        <input
          readonly
          type="text"
          class="form-control"
          v-model="studentInfo.preferredShift"
          placeholder="Preferred Shift"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.preferredShift"
          placeholder="Preferred Shift"
          v-if="editable === true"
        >
      </div>
      <div class="col">
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
export default {
  name: 'PersonalInformation',
  props: ['editable', 'studentInfo'],
};
</script>

<style lang="scss" scoped>
</style>
