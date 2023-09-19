import { test } from "@playwright/test";
import { testHeader } from "./header/components/index.spec";

export function testLayout() {
  test.describe("Layout components test", () => {
    testHeader();
  });
}
