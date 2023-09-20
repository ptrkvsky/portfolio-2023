import { configHome } from "@features/home/config";
import { test, expect } from "@playwright/test";

test.describe("Logo tests", () => {
  test("should find the logo element in the DOM", async ({ page }) => {
    const logo = page.getByTestId("header___logo");

    expect(logo).not.toBeNull();
  });

  test("logo link", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    // Click the get started link.
    await page.getByTestId("header___logo").click();

    // Expects home page to have a certain title.
    await expect(page).toHaveTitle(configHome.metaTitle);
  });
});
