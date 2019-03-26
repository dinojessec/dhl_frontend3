import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: {},
    strand: [],
  },

  mutations: {
    studentStateChange(state, student) {
      const stateRef = state;
      stateRef.student = student;
    },
    setStrandList(state, payload) {
      const stateRef = state;
      stateRef.strand = payload;
    },
  },

  actions: {},

  getters: {
    getStudentData: state => state.student,

    getStrandData: state => state.strand,
  },
});
