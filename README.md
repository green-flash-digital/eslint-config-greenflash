# eslint-config-greenflash

A shareable ESLint flat configuration for projects using Typescript, React & Node.

## Features

- Supports JavaScript and TypeScript
- Configures recommended rules from ESLint, TypeScript, React, and Import plugins
- Includes React Hooks linting
- Enforces consistent import order
- Ignores common build and cache directories

## Installation

Install the package and its peer dependencies:

```sh
yarn add --dev eslint eslint-config-greenflash
```

## Usage

In your ESLint configuration (`.eslintrc.js`):

### Use just the configuration

```js
export default "eslint-config-greenflash";
```

### Extend the configuration

```js
import baseConfig from "eslint-config-greenflash";

export default [
  ...baseConfig,
  {
    files: ["**/*.test.{js,ts,jsx,tsx}"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
```

Alternatively, in `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-yourname"
  }
}
```

## License

MIT License
