import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
  it("renders props.msg when passed", () => {
    const btnText = "Join";
    const wrapper = shallowMount(HomeView);
    expect(wrapper.text()).toMatch(btnText);
  });
});
