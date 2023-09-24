import { test, expect } from "@playwright/test";

test.describe("Button Menu Desktop", () => {
  test.use({ viewport: { width: 1920, height: 1200 } });

  test("Title should be visbile on desktop", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
  });

  test("Title text should be correct", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toHaveText("Développeur React Freelance à Toulouse");
  });
});
