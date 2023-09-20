import { test, expect } from "@playwright/test";

test.describe("Clock tests", () => {
  test("should find the city element in the DOM", async ({ page }) => {
    const clock = page.getByTestId("header___city");

    expect(clock).not.toBeNull();
  });
});
