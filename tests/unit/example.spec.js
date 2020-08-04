import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import WelcomeMessage from "@/components/WelcomeMessage.vue";

describe("WelcomeMessage.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(WelcomeMessage, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
