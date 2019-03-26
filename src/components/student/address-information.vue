<template>
  <div class="container">
    <!-- 1st row -->
    <h3>my Address</h3>
    <div class="row">
      <div class="col-3">
        <label>House Number</label>
        <input
          class="form-control"
          type="text"
          id="houseNumber"
          disabled
        >
      </div>
      <div class="col-5">
        <label>Street Name</label>
        <input
          class="form-control"
          type="text"
          id="streetName"
          disabled
        >
      </div>
      <div class="col-4">
        <label>Barangay</label>
        <input
          class="form-control"
          type="text"
          id="barangay"
          disabled
        >
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label>Town</label>
        <input
          class="form-control"
          type="text"
          id="town"
          disabled
        >
      </div>
      <div class="col-6">
        <label>City</label>
        <input
          class="form-control"
          type="text"
          id="city"
          disabled
        >
      </div>
    </div>
    <small>*address is the same above*</small>
    <h3>my Father Address</h3>
    <div class="row">
      <div class="col-3">
        <label>House Number</label>
        <input
          class="form-control"
          type="text"
          id="fatherHouseNumber"
          disabled
        >
      </div>
      <div class="col-5">
        <label>Street Name</label>
        <input
          class="form-control"
          type="text"
          id="fatherStreetName"
          disabled
        >
      </div>
      <div class="col-4">
        <label>Barangay</label>
        <input
          class="form-control"
          type="text"
          id="fatherBarangy"
          disabled
        >
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label>Town</label>
        <input
          class="form-control"
          type="text"
          id="fatherTown"
          disabled
        >
      </div>
      <div class="col-6">
        <label>City</label>
        <input
          class="form-control"
          type="text"
          id="fatherCity"
          disabled
        >
      </div>
    </div>

    <h3>my Mother Address</h3>
    <div class="row">
      <div class="col-3">
        <label>House Number</label>
        <input
          class="form-control"
          type="text"
          id="motherMouseNumber"
          disabled
        >
      </div>
      <div class="col-5">
        <label>Street Name</label>
        <input
          class="form-control"
          type="text"
          id="motherStreetName"
          disabled
        >
      </div>
      <div class="col-4">
        <label>Barangay</label>
        <input
          class="form-control"
          type="text"
          id="motherBarangay"
          disabled
        >
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label>Town</label>
        <input
          class="form-control"
          type="text"
          id="motherTown"
          disabled
        >
      </div>
      <div class="col-6">
        <label>City</label>
        <input
          class="form-control"
          type="text"
          id="motherCity"
          disabled
        >
      </div>
    </div>

    <!-- end of container -->
  </div>
</template>

<script>
export default {
  name: 'AddressInformation'
};
</script>

<style lang="scss" scoped>
</style>

