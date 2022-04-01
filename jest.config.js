module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  collectCoverage: false,
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,js,tsx,jsx,cjs,mjs}"],
  coveragePathIgnorePatterns: ["/dist", ".config", ".stories", ".spec"],
  coverageReporters: ["text", "lcov", "cobertura"],
  reporters: ["default"],
  moduleNameMapper: {
    swiper_angular: "<rootDir>/node_modules/swiper",
  },
  transformIgnorePatterns: [
    `node_modules/(?!(@angular|@testing-library|swiper|ssr-window|dom7))`,
  ],
};
