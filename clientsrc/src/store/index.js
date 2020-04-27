import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, payload) {
      state.bugs = payload
    },
    setActiveBug(state, payload) {
      state.activeBug = payload
    },
    setNotes(state, payload) {
      state.notes = payload
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },


    // #region --BUG--
    async createBug({dispatch, commit}, bugData) {
      try {
        let res = await api.post('/bugs', bugData);
        commit('setActiveBug', res.data);
        dispatch('getBugs');
      } catch (error) {
        console.error(error);
      }
    },
    async getBugs({dispatch, commit}) {
      try {
        let res = await api.get('/bugs');
        commit('setBugs', res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBug({dispatch, commit}, bugId) {
      try {
        let res = await api.get(`bugs/${bugId}`)
        commit('setActiveBug', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async editBug({dispatch, commit}, bugData) {
      try {
        let res = await api.put(`bugs/${bugData._id}`, bugData)
        dispatch('getBug', bugData._id)
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion 
    
    
    // //#region --NOTES--
    async createNote({dispatch, commit}, note) {
      try {
        console.log(note)
        let res = await api.post(`bugs/${note.bug}/notes`, note)
        dispatch('getNotes', note.bug)
      } catch (error) {
        console.error(error)
      }
    },
    
    async getNotes({dispatch, commit}, bugId) {
      try {
        let res = await api.get(`notes/${bugId}`)
        commit('setNotes', res.data)
      } catch (error) {
        console.error(error)
      }
    }
    // //#endregion
  }
});
