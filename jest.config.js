module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/tests/__mocks__/file-mock.js`,
    "^@reach/router(.*)": "<rootDir>/node_modules/@gatsbyjs/reach-router$1",
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `cypress`,
    `fixtures`,
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby-theme-i18n|gatsby-script)/)`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  setupFilesAfterEnv: [`<rootDir>/tests/setup-test-env.js`],
}
