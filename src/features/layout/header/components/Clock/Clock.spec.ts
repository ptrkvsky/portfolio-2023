import { test, expect } from "@playwright/test";

export function clockTests() {
  test.describe("Clock tests", () => {
    test("should find the clock element in the DOM", async ({ page }) => {
      const logo = page.getByTestId("header___clock");

      expect(logo).not.toBeNull();
    });
  });
}
