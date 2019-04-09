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
    groupID: null,
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

    updateToken(state, token) {
      const stateRef = state;
      stateRef.token = token;
    },

    updateUserID(state, userID) {
      const stateRef = state;
      stateRef.userID = userID;
    },

    updateGroupID(state, groupID) {
      const stateRef = state;
      stateRef.groupID = groupID;
    },
  },

  actions: {
    fetchToken({ commit }) {
      commit('updateToken', localStorage.getItem('token'));
    },
    fetchGroupID({ commit }) {
      commit('updateGroupID', localStorage.getItem('groupID'));
    },
    // {
    //   fetchUserID({ commit }) {
    //     commit('updateUserID', );
    //   }
    // },
  },

  getters: {
    getStudentData: state => state.student,

    getStudentInfo: state => state.studentInfo,

    getNewStrand: state => state.strand,

    getUserID: state => state.userID,

    getGroupID: state => state.groupID,

    getToken: state => state.token,
  },
});
