import { createStore } from "vuex";

export default createStore({
  state: {
    userInformation: {
      username: "",
      email: "",
      jwt: "",
    },
  },
  getters: {
    userInfor: (state) => state.userInformation,
  },
  mutations: {
    setUserInformation: (state, value) => {
      state.userInformation.jwt = value.jwt;
      state.userInformation.email = value.user.email;
      state.userInformation.username = value.user.username;
    },
    logoutUser: (state) => {
      state.userInformation.jwt = "";
      state.userInformation.email = "";
      state.userInformation.username = "";
    },
  },
  actions: {},
  modules: {},
});
