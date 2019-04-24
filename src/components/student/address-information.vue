<template>
  <div class="container">
    <!-- 1st row -->
    <h3>my Address</h3>
    <div class="row p-2">
      <div class="col-3">
        <input
          readonly
          class="form-control"
          type="text"
          id="houseNumber"
          placeholder="House Number"
          :value="studentInfo.homeNumber"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          name="house number"
          id="houseNumber"
          placeholder="House Number"
          v-model="studentInfo.homeNumber"
          v-if="editable === true"
          v-validate="{ required: true }"
        >
        <div class="err">{{ errors.first('house number') }}</div>
      </div>
      <div class="col-5">
        <input
          readonly
          class="form-control"
          type="text"
          id="streetName"
          placeholder="Street Name"
          :value="studentInfo.streetName"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          name="street name"
          id="streetName"
          placeholder="Street Name"
          v-model="studentInfo.streetName"
          v-if="editable === true"
          v-validate="{ required: true }"
        >
        <div class="err">{{ errors.first('street name') }}</div>
      </div>
      <div class="col-4">
        <input
          readonly
          class="form-control"
          type="text"
          id="barangay"
          placeholder="Barangay"
          :value="studentInfo.barangay"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          name="barangay"
          id="barangay"
          placeholder="Barangay"
          v-model="studentInfo.barangay"
          v-if="editable === true"
          v-validate="{ required: true }"
        >
        <div class="err">{{ errors.first('barangay') }}</div>
      </div>
    </div>

    <div class="row p-2">
      <div class="col-6">
        <input
          readonly
          class="form-control"
          type="text"
          id="town"
          placeholder="Town"
          :value="studentInfo.town"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="town"
          name="town"
          placeholder="Town"
          v-model="studentInfo.town"
          v-if="editable === true"
          v-validate="{ required: true }"
        >
        <div class="err">{{ errors.first('town') }}</div>
      </div>
      <div class="col-6">
        <input
          readonly
          class="form-control"
          type="text"
          id="city"
          placeholder="City"
          :value="studentInfo.city"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="city"
          name="city"
          placeholder="City"
          v-model="studentInfo.city"
          v-if="editable === true"
          v-validate="{ required: true }"
        >
        <div class="err">{{ errors.first('city') }}</div>
      </div>
    </div>
    <hr>
    <h3>my Father Address</h3>
    <div class="row p-2">
      <div class="col-3">
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherHouseNumber"
          placeholder="House Number"
          :value="studentInfo.fatherHomeNumber"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherHouseNumber"
          placeholder="House Number"
          v-model="studentInfo.fatherHomeNumber"
          v-if="editable === true"
        >
      </div>
      <div class="col-5">
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherStreetName"
          placeholder="Street Name"
          :value="studentInfo.fatherStreetName"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherStreetName"
          placeholder="Street Name"
          v-model="studentInfo.fatherStreetName"
          v-if="editable === true"
        >
      </div>
      <div class="col-4">
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherBarangy"
          placeholder="Barangay"
          :value="studentInfo.fatherBarangay"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherBarangy"
          placeholder="Barangay"
          v-model="studentInfo.fatherBarangay"
          v-if="editable === true"
        >
      </div>
    </div>

    <div class="row p-2">
      <div class="col-6">
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherTown"
          placeholder="Town"
          :value="studentInfo.fatherTown"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherTown"
          placeholder="Town"
          v-model="studentInfo.fatherTown"
          v-if="editable === true"
        >
      </div>
      <div class="col-6">
        <input
          readonly
          class="form-control"
          type="text"
          id="fatherCity"
          placeholder="City"
          :value="studentInfo.fatherCity"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="fatherCity"
          placeholder="City"
          v-model="studentInfo.fatherCity"
          v-if="editable === true"
        >
      </div>
    </div>
    <hr>
    <h3>my Mother Address</h3>
    <div class="row p-2">
      <div class="col-3">
        <input
          readonly
          class="form-control"
          type="text"
          id="motherHomeNumber"
          placeholder="Home Number"
          :value="studentInfo.motherHomeNumber"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherHomeNumber"
          placeholder="Home Number"
          v-model="studentInfo.motherHomeNumber"
          v-if="editable === true"
        >
      </div>
      <div class="col-5">
        <input
          readonly
          class="form-control"
          type="text"
          id="motherStreetName"
          placeholder="Street Name"
          :value="studentInfo.motherStreetName"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherStreetName"
          placeholder="Street Name"
          v-model="studentInfo.motherStreetName"
          v-if="editable === true"
        >
      </div>
      <div class="col-4">
        <input
          readonly
          class="form-control"
          type="text"
          id="motherBarangay"
          placeholder="Barangay"
          :value="studentInfo.motherBarangay"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherBarangay"
          placeholder="Barangay"
          v-model="studentInfo.motherBarangay"
          v-if="editable === true"
        >
      </div>
    </div>

    <div class="row p-2">
      <div class="col-6">
        <input
          readonly
          class="form-control"
          type="text"
          id="motherTown"
          placeholder="Town"
          :value="studentInfo.motherTown"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherTown"
          placeholder="Town"
          v-model="studentInfo.motherTown"
          v-if="editable === true"
        >
      </div>
      <div class="col-6">
        <input
          readonly
          class="form-control"
          type="text"
          id="motherCity"
          placeholder="City"
          :value="studentInfo.motherCity"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          id="motherCity"
          placeholder="City"
          v-model="studentInfo.motherCity"
          v-if="editable === true"
        >
      </div>
    </div>

    <h3>my Guardian Address</h3>
    <div class="row p-2">
      <div class="col-3">
        <input
          readonly
          class="form-control"
          type="text"
          placeholder="Home Number"
          :value="studentInfo.guardianHomeNumber"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          placeholder="Home Number"
          v-model="studentInfo.guardianHomeNumber"
          v-if="editable === true"
        >
      </div>
      <div class="col-5">
        <input
          readonly
          class="form-control"
          type="text"
          placeholder="Street Name"
          :value="studentInfo.guardianStreetName"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          placeholder="Street Name"
          v-model="studentInfo.guardianStreetName"
          v-if="editable === true"
        >
      </div>
      <div class="col-4">
        <input
          readonly
          class="form-control"
          type="text"
          placeholder="Barangay"
          :value="studentInfo.guardianBarangay"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          placeholder="Barangay"
          v-model="studentInfo.guardianBarangay"
          v-if="editable === true"
        >
      </div>
    </div>

    <div class="row p-2">
      <div class="col-6">
        <input
          readonly
          class="form-control"
          type="text"
          placeholder="Town"
          :value="studentInfo.guardianTown"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          placeholder="Town"
          v-model="studentInfo.guardianTown"
          v-if="editable === true"
        >
      </div>
      <div class="col-6">
        <input
          readonly
          class="form-control"
          type="text"
          placeholder="City"
          :value="studentInfo.guardianCity"
          v-if="editable === false"
        >
        <input
          class="form-control"
          type="text"
          placeholder="City"
          v-model="studentInfo.guardianCity"
          v-if="editable === true"
        >
      </div>
    </div>

    <!-- end of container -->
  </div>
</template>

<script>
export default {
  name: "AddressInformation",
  inject: ["$validator"],
  props: ["editable", "studentInfo"]
};
</script>

<style scoped>
.err {
  color: #ff0000;
}
</style>

