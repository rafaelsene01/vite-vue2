import { beforeAll, afterAll, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import MoneySlider from "@/components/HelloWorld.vue";

describe("Money Slider Component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(MoneySlider, {});
  });

  afterAll(() => {
    wrapper.destroy();
  });

  it("should be a Vue Component", () => {
    expect(wrapper.vm).toBeDefined();
  });
});
