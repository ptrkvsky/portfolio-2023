import { test, expect } from "@playwright/test";

test("should find the logo element in the DOM", async ({ page }) => {
  const logo = page.getByTestId("header___logo");

  // Check if the header element exists in the DOM
  await expect(logo).not.toBeNull();
});
