<template>

  <div class="container">
    <div class="row">
      <div class="col m-2">
        <div class="pept m-1">
          <label>PEPT passer</label>
          <select
            class="custom-select mb-2"
            v-model="competency.pept"
          >
            <option
              selected
              disabled
            >Choose..</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          <div class="input-group">
            <div class="custom-file">
              <input
                type="file"
                ref="pept"
                class="custom-file-input"
                id="pept"
              >
              <label
                class="custom-file-label"
                for="pept"
              >Choose file</label>
            </div>
          </div>
        </div>

        <hr>

        <div class="als m-1">
          <label>Alternative Learning System passer</label>
          <select
            class="custom-select mb-2"
            v-model="competency.als"
          >
            <option
              selected
              disabled
            >Choose..</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          <div class="input-group">
            <div class="custom-file">
              <input
                type="file"
                ref="als"
                class="custom-file-input"
                id="als"
              >
              <label
                class="custom-file-label"
                for="als"
              >Choose file</label>
            </div>
          </div>
        </div>

        <hr>

        <div class="als m-1">
          <label>Nactional Certificate</label>
          <select
            class="custom-select mb-2"
            v-model="competency.nc"
          >
            <option
              selected
              disabled
            >Choose..</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          <div class="input-group">
            <div class="custom-file">
              <input
                type="file"
                ref="nc"
                class="custom-file-input"
                id="nc"
              >
              <label
                class="custom-file-label"
                for="nc"
              >Choose file</label>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Competency",
  data() {
    return {
      competency: ""
    };
  }
};
</script>

<style>
</style>
