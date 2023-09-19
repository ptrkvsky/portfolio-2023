import { test, expect } from "@playwright/test";

export function TestsButtonMenu() {
  test.describe("Button Menu", () => {
    test.describe("Button Menu", () => {
      test("Button should not be visbile on desktop", async ({ page }) => {
        const button = page.getByTestId("button-menu");
        await expect(button).not.toBeVisible();
      });
    });

    test.use({ viewport: { width: 900, height: 1200 } });
    test("Button should be visbile on mobile", async ({ page }) => {
      const button = page.getByTestId("button-menu");
      await expect(button).not.toBeVisible();
    });

    test.use({ viewport: { width: 900, height: 1200 } });
    test("Menu mobile should open when clicked", async ({ page }) => {
      const button = page.getByTestId("button-menu");
      const menu = page.getByTestId("menu-mobile");
      await button.click();

      await expect(menu).toBeVisible();
    });
  });
}
