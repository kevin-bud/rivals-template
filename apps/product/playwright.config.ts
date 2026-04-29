import { defineConfig } from "@playwright/test";

const baseURL = process.env.PRODUCT_URL ?? "http://localhost:8787";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 0 : 0,
  reporter: "list",
  use: {
    baseURL,
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
