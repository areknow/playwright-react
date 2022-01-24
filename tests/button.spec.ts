import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  expect(await page.screenshot()).toMatchSnapshot("button-page.png");
});
