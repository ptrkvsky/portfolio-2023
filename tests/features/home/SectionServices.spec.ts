import { expect, test } from "@playwright/test";

test.describe("Section Services", () => {
  test.use({ viewport: { width: 600, height: 1200 } });

  test("Section service est visible", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const sectionServices = page.getByTestId("section-services");
    await expect(sectionServices).toBeVisible();
  });

  test("Vérifie que la section des services est chargée", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    await expect(page.getByTestId("service-1")).toHaveText(
      "Développement d'appplications React",
    );
  });

  test("Vérifie au hover que l'image est visible", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    await page.getByTestId("service-1").hover();
    await page.getByTestId("service-1").getAttribute("data-image");

    await expect(page.getByTestId("service-background-image")).toBeVisible();
  });

  test("Vérifie au hover que l'attribut style change", async ({ page }) => {
    await page.goto("http://localhost:4321/");

    await page.getByTestId("service-1").hover();
    const dataImageAttribute = await page
      .getByTestId("service-1")
      .getAttribute("data-image");
    const backgroundImage = page.getByTestId("service-background-image");
    // Récupérez la valeur de l'attribut style
    const styleValue = await backgroundImage.getAttribute("style");

    expect(styleValue).toContain(
      `background-image: url("${dataImageAttribute}")`,
    );
  });
});
