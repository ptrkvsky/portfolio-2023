import { test, expect } from "@playwright/test";

test.describe("Nav main test", () => {
  test("Is nav main present", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const nav = page.getByTestId("nav-main");
    expect(nav).not.toBeNull();
  });
});
