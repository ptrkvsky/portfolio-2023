import { expect, test } from "@playwright/test";

test.describe("Section Services", () => {
  test.use({ viewport: { width: 600, height: 1200 } });

  test("Section projets is visible", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const section = page.getByTestId("section-projets");
    await expect(section).toBeVisible();
  });

  test("Section should have H2 `projets`", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const heading = page.getByRole("heading", { level: 2, name: "projets" });

    await expect(heading).toBeVisible();
  });
});
