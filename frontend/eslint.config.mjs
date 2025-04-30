const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // disable all ESLint rules (not recommended)
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Add more rules to disable as needed
    },
  },
];
