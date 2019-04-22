import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: {},
    studentInfo: {},
    strand: {},
    token: null,
    userID: null,
    roleID: null,
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

    updateBirthday(state, payload) {
      const stateRef = state;
      stateRef.studentInfo.birthday = payload;
    },

    updateJhsGraduation(state, payload) {
      const stateRef = state;
      stateRef.studentInfo.jhsYear = payload;
    },

    updateElemGraduation(state, payload) {
      const stateRef = state;
      stateRef.studentInfo.elemYear = payload;
    },

    addNewStrand(state, payload) {
      const stateRef = state;
      stateRef.strand = payload;
    },

    updateToken(state, token) {
      const stateRef = state;
      stateRef.token = token;
    },

    updateUserID(state, userID) {
      const stateRef = state;
      stateRef.userID = userID;
    },

    updateRoleID(state, roleID) {
      const stateRef = state;
      stateRef.roleID = roleID;
    },

    addJHSgrades(state, payload) {
      const stateRef = state;
      stateRef.studentInfo.grades = payload;
    }
  },

  actions: {
    fetchToken({ commit }) {
      commit('updateToken', localStorage.getItem('token'));
    },

    passNewBirthday({ commit }, payload) {
      commit('updateBirthday', payload)
    },

    passUpdatedJHS({ commit }, payload) {
      commit('updateJhsGraduation', payload)
    },

    passUpdatedElem({ commit }, payload) {
      commit('updateElemGraduation', payload)
    },

    passJHSgrades({ commit }, payload) {
      commit('addJHSgrades', payload);
    }
  },

  getters: {
    getStudentData: state => state.student,

    getStudentInfo: state => state.studentInfo,

    getNewStrand: state => state.strand,

    getUserID: state => state.userID,

    getRoleID: state => state.roleID,

    getToken: state => state.token,
  },
});
