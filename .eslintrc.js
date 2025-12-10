module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  plugins: ["react", "react-refresh", "react-hooks"],
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
    "no-unused-vars": "warn",

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ]
  }
};
