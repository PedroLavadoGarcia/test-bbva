import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import GameView from "@/views/GameView.vue";

describe("GameView.vue", () => {
  it("wrapper GameView.vue", () => {
    const wrapper = shallowMount(GameView);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".text-sm-right").exists()).toBe(true);
  });
  it("addPoint low GameView.vue", () => {
    const $store = {
      state: {
        name: "",
        level: "Low",
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      commit: jest.fn(),
    };
    const wrapper = mount(GameView, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        points: 0,
        start: false,
        firstName: "",
      },
    });
    wrapper.vm.addPoint();
    expect(wrapper.vm.points).toBe(10);
  });
  it("addPoint Medium GameView.vue", () => {
    const $store = {
      state: {
        name: "",
        level: "Medium",
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      commit: jest.fn(),
    };
    const wrapper = mount(GameView, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        points: 0,
        start: false,
        firstName: "",
      },
    });
    wrapper.vm.addPoint();
    expect(wrapper.vm.points).toBe(20);
  });
  it("addPoint Medium GameView.vue", () => {
    const $store = {
      state: {
        name: "",
        level: "High",
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      commit: jest.fn(),
    };
    const wrapper = mount(GameView, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        points: 0,
        start: false,
        firstName: "",
      },
    });
    wrapper.vm.addPoint();
    expect(wrapper.vm.points).toBe(30);
  });
});
