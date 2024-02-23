import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
  const $store = {
    state: {
      name: "",
      level: "LOW",
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    dispatch: jest.fn(),
  };
  it("renders props.msg when passed", () => {
    const btnText = "Join";
    const wrapper = shallowMount(HomeView);
    expect(wrapper.text()).toMatch(btnText);
  });
  it("Calls join() when pressing join button", async () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    const joinButton = wrapper.find("#joinButton");
    const spy = jest.spyOn(wrapper.vm, "join");
    joinButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});
