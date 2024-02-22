import { shallowMount } from "@vue/test-utils";
import ToolbarGame from "@/components/ToolbarGame.vue";
import { constant } from "@/common/constant";
// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// const vuetify = createVuetify({
//   components,
//   directives,
// });

global.ResizeObserver = require("resize-observer-polyfill");

describe("ToolbarGame.vue", () => {
  it("wrapper ToolbarGame.vue", () => {
    const $store = {
      state: {
        name: "",
        level: "High",
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      commit: jest.fn(),
    };
    const wrapper = shallowMount(ToolbarGame, {
      global: {
        mocks: {
          $store,
        },
        // plugins: [vuetify],
      },
      props: {
        level: constant.LOW_TEXT,
        items: constant.LIST_LEVELS,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".text-sm-left").exists()).toBe(true);
  });
});
