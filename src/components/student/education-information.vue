<template>
  <div class="container">
    <h3>Elementary</h3>
    <div class="form-row p-2">
      <div class="col-6">
        <input
          readonly
          type="text"
          class="form-control"
          placeholder="Elementary"
          :value="studentInfo.elementary"
          v-if="editable === false"
        >
        <input
          type="text"
          name="elementary"
          class="form-control"
          placeholder="Elementary"
          v-model="studentInfo.elementary"
          v-if="editable === true"
        >
      </div>
      <div class="col-6">
        <input
          readonly
          type="text"
          class="form-control"
          placeholder="Elementary Year Graduated"
          :value="studentInfo.elemYear"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          placeholder="Elementary Year Graduated"
          v-model="studentInfo.elemYear"
          v-if="editable === true"
        >
      </div>
    </div>
    <div class="form-row p-2">
      <div class="col-12">
        <textarea
          readonly
          class="form-control"
          rows="2"
          placeholder="Elementary Honors/Awards"
          :value="studentInfo.elemHonor"
          v-if="editable === false"
        ></textarea>
        <textarea
          class="form-control"
          rows="2"
          placeholder="Elementary Honors/Awards"
          v-model="studentInfo.elemHonor"
          v-if="editable === true"
        ></textarea>
      </div>
    </div>

    <h3>Junior High School</h3>
    <div class="form-row p-2">
      <div class="col-6">
        <input
          readonly
          type="text"
          class="form-control"
          placeholder="Junior High School"
          :value="studentInfo.juniorHighSchool"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          placeholder="Junior High School"
          v-model="studentInfo.juniorHighSchool"
          v-if="editable === true"
        >
      </div>
      <div class="col-6">
        <input
          readonly
          type="text"
          class="form-control"
          placeholder="Junior High School Graduated"
          :value="studentInfo.jhsYear"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          placeholder="Junior High School Graduated"
          v-model="studentInfo.jhsYear"
          v-if="editable === true"
        >
      </div>
    </div>
    <div class="form-row p-2">
      <div class="col-12">
        <textarea
          readonly
          class="form-control"
          rows="2"
          placeholder="Junior High School Honors/Awards"
          :value="studentInfo.jhsHonor"
          v-if="editable === false"
        ></textarea>
        <textarea
          class="form-control"
          rows="2"
          placeholder="Junior High School Honors/Awards"
          v-model="studentInfo.jhsHonor"
          v-if="editable === true"
        ></textarea>
      </div>
    </div>
    <div class="form-row p-2">
      <div class="col-8">
        <label>Junior High School Address</label>
        <input
          readonly
          type="text"
          class="form-control"
          placeholder="Junior High School Location"
          :value="studentInfo.jhsLocation"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          placeholder="Junior High School Location"
          v-model="studentInfo.jhsLocation"
          v-if="editable === true"
        >
      </div>
      <div class="col-4">
        <label>School Type</label>
        <input
          readonly
          placeholder="private or public"
          type="text"
          class="form-control"
          :value="studentInfo.schoolType"
          v-if="editable === false"
        >
        <select
          class="form-control"
          v-model="studentInfo.schoolType"
          v-if="editable === true"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
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
  name: "EducationInformation",
  props: ["editable", "studentInfo"]
};
</script>

<style lang="scss" scoped>
</style>
