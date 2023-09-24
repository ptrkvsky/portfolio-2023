import { describe, expect, it } from "vitest";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter"; // Replace with the correct path to your module

describe("capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a string", () => {
    const input = "hello";
    const result = capitalizeFirstLetter(input);
    expect(result).toBe("Hello");
  });

  it("should handle empty strings", () => {
    const input = "";
    const result = capitalizeFirstLetter(input);
    expect(result).toBe("");
  });

  it("should handle strings with only one character", () => {
    const input = "a";
    const result = capitalizeFirstLetter(input);
    expect(result).toBe("A");
  });
});
