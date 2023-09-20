import { test, expect } from "@playwright/test";

test.describe("Clock tests", () => {
  test("should find the clock element in the DOM", async ({ page }) => {
    const clock = page.getByTestId("header___clock");

    expect(clock).not.toBeNull();
  });
  test("should find the analog clock element in the DOM", async ({ page }) => {
    const clock = page.getByTestId("header___clock-analog");

    expect(clock).not.toBeNull();
  });
});
