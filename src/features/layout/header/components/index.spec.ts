import { testsLogo } from "./Logo/Logo.spec";
import { testsClock } from "./Clock/Clock.spec";
import { test } from "@playwright/test";
import { testsCity } from "./City/City.spec";
import { TestsNavMain } from "./NavMain/NavMain.spec";
import { TestsButtonMenu } from "./ButtonMenu/ButtonMenu.spec";

export function testHeader() {
  test.describe("Header components test", () => {
    testsLogo();
    testsClock();
    testsCity();
    TestsNavMain();
    TestsButtonMenu();
  });
}
