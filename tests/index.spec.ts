import { test, expect } from "@playwright/test";

const homeTitle = "Johan Petrikovsky développeur React Freelance à Toulouse";

test("meta is correct", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  await expect(page).toHaveTitle(homeTitle);
});

test("should find the header element in the DOM", async ({ page }) => {
  const headerElement = page.getByTestId("header");

  expect(headerElement).not.toBeNull();
});

test("should find the logo element in the DOM", async ({ page }) => {
  const logo = page.getByTestId("header___logo");

  expect(logo).not.toBeNull();
});

test("logo link", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  // Click the get started link.
  await page.getByTestId("header___logo").click();

  // Expects home page to have a certain title.
  await expect(page).toHaveTitle(homeTitle);
});
