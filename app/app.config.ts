export default defineAppConfig({
  ui: {
    colors: {
      primary: "violet",
      secondary: "amber",
      success: "emerald",
      danger: "rose",
      neutral: "slate",
    },
    card: {
      variants: {
        variant: {
          subtle: {
            root: "bg-white dark:bg-elevated ring ring-default divide-y divide-default",
          },
        },
      },
    },
  },
});
