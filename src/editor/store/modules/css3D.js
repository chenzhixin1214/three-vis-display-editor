import Vue from "vue";
import { MODULETYPE } from "@vis-three/middleware";
import { engine } from "../../assets/js/vis";

export const module = {
  namespaced: true,
  state: {
    map: engine.dataSupportManager.getDataSupport(MODULETYPE.CSS3D).getData(),
    module: MODULETYPE.CSS3D,
  },
  getters: {
    get(state) {
      return state.map;
    },
  },
  mutations: {
    add(state, config) {
      state.map[config.vid] = config;
      state.map.__ob__.dep.notify();
    },

    remove(state, vid) {
      delete state.map[vid];
    },

    notify(state) {
      state.map.__ob__.dep.notify();
    },
  },
  actions: {},
};