import { expect, test } from "@playwright/test";

test.describe("Button Menu Desktop", () => {
  test.use({ viewport: { width: 1920, height: 1200 } });

  test("Button should not be visbile on desktop", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const button = page.getByTestId("button-menu");
    await expect(button).not.toBeVisible();
  });
});

test.describe("Button Menu Mobile", () => {
  test.use({ viewport: { width: 900, height: 1200 } });
  test("Button should be visbile on mobile", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const button = page.getByTestId("button-menu");
    await expect(button).toBeVisible();
  });

  test.use({ viewport: { width: 900, height: 1200 } });
  test("Menu mobile should open when clicked", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const button = page.getByTestId("button-menu");
    const menu = page.getByTestId("menu-mobile");
    await button.click();

    await expect(menu).toBeVisible();
  });
});
