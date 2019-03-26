<template>
  <div class="container">
    <h3>Elementary</h3>
    <div class="form-row p-2">
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Elementary"
        >
      </div>
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Elementary Year Graduated"
        >
      </div>
    </div>
    <div class="form-row p-2">
      <div class="col-12">
        <textarea
          class="form-control"
          rows="2"
          placeholder="Elementary Honors/Awards"
        ></textarea>
      </div>
    </div>

    <h3>Junior High School</h3>
    <div class="form-row p-2">
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Junior High School"
        >
      </div>
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Junior High School Graduated"
        >
      </div>
    </div>
    <div class="form-row p-2">
      <div class="col-12">
        <textarea
          class="form-control"
          rows="2"
          placeholder="Junior High School Honors/Awards"
        ></textarea>
      </div>
    </div>
    <div class="form-row p-2">
      <div class="col-8">
        <label>Junior High School Address</label>
        <input
          type="text"
          class="form-control"
          placeholder="Junior High School Location"
        >
      </div>
      <div class="col-4">
        <label>School Type</label>
        <select class="form-control">
          <option selected>Choose..</option>
          <option>Public</option>
          <option>Private</option>
        </select>
      </div>
    </div>

    <h3>Organization</h3>
    <div class="form-row p-2">
      <!-- <div class="col">
                <input type="text" class="form-control" placeholder="Organization">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Organization Awards">
            </div> -->
      <div class="col">
        <textarea
          class="form-control"
          rows="3"
          placeholder="Input list of Organization and Awards received from that Org"
        ></textarea>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'EducationInformation',
}
</script>

<style lang="scss" scoped>
</style>
