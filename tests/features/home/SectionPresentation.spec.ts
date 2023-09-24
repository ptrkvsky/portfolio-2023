import { expect, test } from "@playwright/test";

test.describe("Section Services", () => {
  test.use({ viewport: { width: 600, height: 1200 } });

  test("Section service is visible", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const sectionServices = page.getByTestId("section-services");
    await expect(sectionServices).toBeVisible();
  });
});
