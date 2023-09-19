import { test, expect } from "@playwright/test";

export function testsLogo() {
  test.describe("Logo tests", () => {
    test("should find the logo element in the DOM", async ({ page }) => {
      const logo = page.getByTestId("header___logo");

      expect(logo).not.toBeNull();
    });
  });
}
