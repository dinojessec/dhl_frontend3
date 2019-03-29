import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: {},
    studentInfo: {},
    strand: {},
  },

  mutations: {
    studentStateChange(state, student) {
      const stateRef = state;
      stateRef.student = student;
    },

    sendStudentInfoToState(state, payload) {
      const stateRef = state;
      stateRef.studentInfo = payload;
    },

    addNewStrand(state, payload) {
      const stateRef = state;
      stateRef.strand = payload;
    },
  },

  actions: {},

  getters: {
    getStudentData: state => state.student,

    getStudentInfo: state => state.studentInfo,

    getNewStrand: state => state.strand,
  },
});
