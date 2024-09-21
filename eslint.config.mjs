import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    plugins: [
      "eslint-config-react-app",
      "eslint-plugin-react",
      "eslint-plugin-react-hooks",
      "eslint-plugin-react-refresh",
    ],
  }
);
