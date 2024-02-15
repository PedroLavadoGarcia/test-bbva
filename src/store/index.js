import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    level: "Low",
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  getters: {
    getName() {
      return this.state.name;
    },
    getLevel() {
      return this.state.level;
    },
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setLevel(state, level) {
      state.level = level;
    },
  },
  actions: {
    setName(context, name) {
      context.commit("setName", name);
    },
    setLevel(context, level) {
      context.commit("setLevel", level);
    },
  },
  modules: {},
});
