// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // Vue 3 supports multiple root elements (fragments)
    "vue/no-multiple-template-root": "off",
    // Allow self-closing on HTML elements to match Prettier
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
          normal: "any",
          component: "always",
        },
      },
    ],
  },
});
