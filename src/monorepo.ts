import { type Linter } from "eslint";
import { baseConfig } from "./_shared.js";

const config: Linter.Config[] = [
  ...baseConfig,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          // Use the TypeScript configuration file
          project: "packages/*/tsconfig.json",
          alwaysTryTypes: true,
        },
        node: {
          // Allow resolving node modules
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];

export default config;
