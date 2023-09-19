import { logoTests } from "./Logo/Logo.spec";
import { clockTests } from "./Clock/Clock.spec";
import { test } from "@playwright/test";

export function testHeader() {
  test.describe("Header components test", () => {
    logoTests();
    clockTests();
  });
}
