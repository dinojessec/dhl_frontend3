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
          placeholder="date of graudation"
          :value="studentInfo.formattedElemYear"
          v-if="editable === false"
        >
        <date-picker
          :input-class="'form-control'"
          placeholder="Input date of graduation"
          v-model="studentInfo.elemYear"
          :value="elem"
          @input="(value) => { this.elem = value}"
          :format="'YYYY-MM-DD'"
          lang="en"
          v-if="editable === true"
          v-validate="{ required: true }"
          name="elementar graduation"
        ></date-picker>
        <div class="err">{{ errors.first('elementar graduation') }}</div>
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
          v-validate="{ required: true }"
          name="juniohighschool"
        >
        <div class="err">{{ errors.first('juniohighschool') }}</div>
      </div>
      <div class="col-6">
        <input
          readonly
          type="text"
          class="form-control"
          placeholder="data of graudation"
          :value="studentInfo.formattedJhsYear"
          v-if="editable === false"
        >
        <date-picker
          :input-class="'form-control'"
          placeholder="Input date of graduation"
          v-model="studentInfo.jhsYear"
          :value="jhs"
          @input="(value) => { this.jhs = value}"
          :format="'YYYY-MM-DD'"
          lang="en"
          v-if="editable === true"
          v-validate="{ required: true }"
          name="junior high graduation"
        ></date-picker>
        <div class="err">{{ errors.first('junior high graduation') }}</div>
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
      <div class="col-9">
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
          v-validate="{ required: true }"
          name="school address"
        >
        <div class="err">{{ errors.first('school address') }}</div>
      </div>
      <div class="col-3">
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
          v-validate="{ required: true }"
          name="school type"
        >
          <div class="err">{{ errors.first('school type') }}</div>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="other">if other, please specify below..</option>
        </select>
        <input
          type="text"
          class="form-control p-2"
          placeholder="Input previous school type"
          v-model="studentInfo.schoolType"
          v-if="studentInfo.schoolType === 'other'"
        >
      </div>
    </div>

    <h3>Organization</h3>
    <div class="form-row p-2">
      <div class="col">
        <textarea
          class="form-control"
          rows="3"
          placeholder="Input list of Organization and Awards received from that Organization"
        ></textarea>
      </div>
    </div>
    <div class="form-row p-2">
      <div class="col">
        <input
          readonly
          type="text"
          class="form-control"
          v-model="studentInfo.preferredCourse"
          placeholder="Preferred Course in College"
          v-if="editable === false"
        >
        <input
          type="text"
          class="form-control"
          v-model="studentInfo.preferredCourse"
          placeholder="Preferred Course in College"
          v-if="editable === true"
        >
      </div>
    </div>

  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";

export default {
  name: "EducationInformation",
  inject: ["$validator"],
  props: ["editable", "studentInfo"],
  components: {
    DatePicker
  },
  data() {
    return {
      jhs: "",
      elem: ""
    };
  },

  watch: {
    jhsDateFormat: {
      handler(val) {
        const dataMap = this.jhsDateFormat;
        this.$store.dispatch("passUpdatedJHS", dataMap);
      },
      deep: true
    },

    elemDateFormat: {
      handler(val) {
        const dataMap = this.elemDateFormat;
        this.$store.dispatch("passUpdatedElem", dataMap);
      },
      deep: true
    }
  },

  computed: {
    jhsDateFormat: {
      cache: false,
      get() {
        let date = new Date(this.jhs);
        const newDate =
          date.getFullYear() +
          "-" +
          ("0" + (date.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + date.getDate()).slice(-2);
        return newDate;
      }
    },

    elemDateFormat: {
      cache: false,
      get() {
        let date = new Date(this.elem);
        const newDate =
          date.getFullYear() +
          "-" +
          ("0" + (date.getMonth() + 1)).slice(-2) +
          "-" +
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
