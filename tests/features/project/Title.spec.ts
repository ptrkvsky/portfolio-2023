import { expect, test } from "@playwright/test";

test.describe("Titre ", () => {
  test("Section service is visible", async ({ page }) => {
    await page.goto("http://localhost:4321/projet/1");

    const sectionServices = page.getByRole("heading", { level: 1 });
    await expect(sectionServices).toBeVisible();
  });
});
