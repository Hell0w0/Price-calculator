module.exports = {
  transform: {
    "^.+.(ts|tsx|js)$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less)$": "<rootDir>/config/CSSStub.js",
  },
};
