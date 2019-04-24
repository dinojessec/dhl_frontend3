<template>

  <div class="container">
    <div class="row">
      <div class="col m-2">
        testing
        <label>Philippine Educational Placement Test Passer: <strong>{{ studentInfo.pept }}</strong></label>
        <select
          class="form-control"
          v-model="studentInfo.pept"
          v-if="editable === true"
          v-validate="{ required: true }"
          name="PEPT"
        >
          <div class="err">{{ errors.first('PEPT') }}</div>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>

        <hr>

        <label>Alternative Learning System Passer: <strong>{{ studentInfo.als }}</strong></label>
        <select
          class="form-control"
          v-model="studentInfo.als"
          v-if="editable === true"
          v-validate="{ required: true }"
          name="ALS"
        >
          <div class="err">{{ errors.first('ALS') }}</div>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>

        <hr>
        <label>National Certificate Passer: <strong>{{ studentInfo.nc }}</strong></label>
        <select
          class="form-control"
          v-model="studentInfo.nc"
          v-if="editable === true"
          v-validate="{ required: true }"
          name="NC"
        >
          <div class="err">{{ errors.first('NC') }}</div>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Competency",
  inject: ["$validator"],
  props: ["editable", "studentInfo"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.err {
  color: #ff0000;
}
</style>
