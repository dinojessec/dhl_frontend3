<template>
  <div class="container">
    <!-- 1st row -->
    <h3>my Address</h3>
    <div class="row">
      <div class="col-3">
        <label>House Number</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="houseNumber"
          :value="studentInfo.houseNumber"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="houseNumber"
          v-model="studentInfo.houseNumber"
          v-if="editable === true"
        >
      </div>
      <div class="col-5">
        <label>Street Name</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="streetName"
          :value="studentInfo.streetName"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="streetName"
          v-model="studentInfo.streetName"
          v-if="editable === true"
        >
      </div>
      <div class="col-4">
        <label>Barangay</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="barangay"
          :value="studentInfo.barangay"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="barangay"
          v-model="studentInfo.barangay"
          v-if="editable === true"
        >
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label>Town</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="town"
          :value="studentInfo.town"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="town"
          v-model="studentInfo.town"
          v-if="editable === true"
        >
      </div>
      <div class="col-6">
        <label>City</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="city"
          :value="studentInfo.city"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="city"
          v-model="studentInfo.city"
          v-if="editable === true"
        >
      </div>
    </div>

    <h3>my Father Address</h3>
    <div class="row">
      <div class="col-3">
        <label>House Number</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherHouseNumber"
          :value="studentInfo.fatherHouseNumber"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherHouseNumber"
          v-model="studentInfo.fatherHouseNumber"
          v-if="editable === true"
        >
      </div>
      <div class="col-5">
        <label>Street Name</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherStreetName"
          :value="studentInfo.fatherStreetName"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherStreetName"
          v-model="studentInfo.fatherStreetName"
          v-if="editable === true"
        >
      </div>
      <div class="col-4">
        <label>Barangay</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherBarangy"
          :value="studentInfo.fatherBarangay"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherBarangy"
          v-model="studentInfo.fatherBarangay"
          v-if="editable === true"
        >
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label>Town</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherTown"
          :value="studentInfo.fatherTown"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherTown"
          v-model="studentInfo.fatherTown"
          v-if="editable === true"
        >
      </div>
      <div class="col-6">
        <label>City</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherCity"
          :value="studentInfo.fatherCity"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherCity"
          v-model="studentInfo.fatherCity"
          v-if="editable === true"
        >
      </div>
    </div>

    <h3>my Mother Address</h3>
    <div class="row">
      <div class="col-3">
        <label>House Number</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="motherHouseNumber"
          :value="studentInfo.motherHouseNumber"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherHouseNumber"
          v-model="studentInfo.motherHouseNumber"
          v-if="editable === true"
        >
      </div>
      <div class="col-5">
        <label>Street Name</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="motherStreetName"
          :value="studentInfo.motherStreetName"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherStreetName"
          v-model="studentInfo.motherStreetName"
          v-if="editable === true"
        >
      </div>
      <div class="col-4">
        <label>Barangay</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="motherBarangay"
          :value="studentInfo.motherBarangay"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherBarangay"
          v-model="studentInfo.motherBarangay"
          v-if="editable === true"
        >
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label>Town</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="motherTown"
          :value="studentInfo.motherTown"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherTown"
          v-model="studentInfo.motherTown"
          v-if="editable === true"
        >
      </div>
      <div class="col-6">
        <label>City</label>
        <input
          readonly
          class="form-control"
          type="text"
          id="motherCity"
          :value="studentInfo.motherCity"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherCity"
          v-model="studentInfo.motherCity"
          v-if="editable === true"
        >
      </div>
    </div>

    <!-- end of container -->
  </div>
</template>

<script>
export default {
  name: 'AddressInformation',
  props: ['editable', 'studentInfo'],
};
</script>

<style lang="scss" scoped>
</style>

