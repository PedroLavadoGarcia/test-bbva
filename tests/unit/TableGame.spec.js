import { mount, shallowMount } from "@vue/test-utils";
import TableGame from "@/components/TableGame.vue";

describe("TableGame.vue", () => {
  const $store = {
    state: {
      name: "",
      level: "Low",
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    commit: jest.fn(),
  };
  it("wrapper TableGame.vue", () => {
    const wrapper = mount(TableGame, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        clickItem: null,
        numberSearch: null,
        viewMode: true,
        list: [],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
  it("initGame TableGame.vue", () => {
    const wrapper = mount(TableGame, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        clickItem: null,
        numberSearch: null,
        viewMode: true,
        list: [],
      },
    });
    wrapper.vm.initGame();
    expect(wrapper.vm.list).toBeTruthy();
  });

  it("clickValue TableGame.vue null", () => {
    const wrapper = shallowMount(TableGame, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        clickItem: null,
        numberSearch: null,
        viewMode: false,
        list: [],
      },
    });
    wrapper.vm.clickValue(4);
    expect(wrapper.vm.clickItem).toBe(null);
  });
});
