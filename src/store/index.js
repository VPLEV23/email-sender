import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    emails: []
  },
  getters: {
    allEmails: state => {
      return state.emails;
    }
  },
  mutations: {
    ADD_EMAIL(state, payload) {
      state.emails.push(payload);
    },
    SET_EMAILS(state, payload) {
      Vue.set(state, "emails", [...payload]);
    },
    DEL_EMAIL(state, payload) {
      state.emails.splice(payload, 1);
    }
  },
  actions: {
    fetchEmails({ commit }) {
      if (localStorage.getItem("emails")) {
        try {
          commit("SET_EMAILS", JSON.parse(localStorage.getItem("emails")));
        } catch (e) {
          localStorage.removeItem("emails");
        }
      }
    },
    addEmail({ commit }, email) {
      commit("ADD_EMAIL", email);
      localStorage.setItem("emails", JSON.stringify(this.state.emails));
    },
    deleteEmail({ commit }) {
      commit("DEL_EMAIL");
      localStorage.setItem("emails", JSON.stringify(this.state.emails));
      // localStorage.removeItem("emails", 1);
      // localStorage.removeItem(email);
    }
  }
});
