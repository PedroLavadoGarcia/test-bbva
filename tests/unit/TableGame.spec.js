import { mount, shallowMount } from "@vue/test-utils";
import TableGame from "@/components/TableGame.vue";

describe("TableGame.vue", () => {
  const $store = {
    state: {
      name: "",
      level: "LOW",
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
        clickItems: [],
        numbersSearch: [],
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
        clickItems: [],
        numbersSearch: [],
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
        clickItems: [],
        numbersSearch: [],
        viewMode: false,
        list: [],
      },
    });
    wrapper.vm.numbersSearch = [4, 5, 6];
    wrapper.vm.viewMode = false;
    wrapper.vm.clickValue(4);
    expect(wrapper.vm.clickItems.length).toBe(1);
  });
  it("validateTest TableGame.vue return 'bg-green'", () => {
    const wrapper = shallowMount(TableGame, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        clickItems: [],
        numbersSearch: [],
        viewMode: false,
        list: [],
      },
    });
    wrapper.vm.numbersSearch = [4, 5, 6];
    const result = wrapper.vm.validateTest(4);
    expect(result).toBe("bg-green");
  });

  it("validateTest TableGame.vue return 'bg-red'", () => {
    const wrapper = shallowMount(TableGame, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        clickItems: [],
        numbersSearch: [],
        viewMode: false,
        list: [],
      },
    });
    const result = wrapper.vm.validateTest(4);
    expect(result).toBe("bg-red");
  });
  it("Pressing first item table call clickValue()", async () => {
    const wrapper = shallowMount(TableGame, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        clickItems: [],
        numbersSearch: [],
        viewMode: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
    });
    await wrapper.vm.$nextTick();
    const celda = wrapper.find(".celda");
    const spy = jest.spyOn(wrapper.vm, "clickValue");
    celda.trigger("click");
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
  });

  it("Pressing play again call initGame()", async () => {
    const wrapper = shallowMount(TableGame, {
      global: {
        mocks: {
          $store,
        },
      },
      props: {
        clickItems: [1, 2, 3],
        numbersSearch: [1, 2, 3],
        viewMode: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
    });
    await wrapper.vm.$nextTick();
    const again = wrapper.find("#again");
    const spy = jest.spyOn(wrapper.vm, "initGame");
    again.trigger("click");
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
  });
});
