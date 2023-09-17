import { test, expect } from "@playwright/test";

test("meta is correct", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  await expect(page).toHaveTitle(
    "Johan Petrikovsky développeur React Freelance à Toulouse",
  );
});

test("should find the header element in the DOM", async ({ page }) => {
  const headerElement = page.getByTestId("header");

  expect(headerElement).not.toBeNull();
});

test("should find the logo element in the DOM", async ({ page }) => {
  const logo = page.getByTestId("header___logo");

  expect(logo).not.toBeNull();
});
