import { test, expect } from "@playwright/test";

export function TestsNavMain() {
  test.describe("Nav main test", () => {
    test("Is nav main present", async ({ page }) => {
      const nav = page.getByTestId("nav-main");
      expect(nav).not.toBeNull();
    });
  });
}
