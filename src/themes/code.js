export const code = {
  plain: {
    color: "var(--color-gray-base)",
    backgroundColor: "var(--color-gray-90)",
  },
  styles: [
    {
      types: ["punctuation", "constant", "deleted"],
      style: {
        color: "var(--color-primary-60)",
      },
    },
    {
      types: ["variable", "keyword", "key", "selector"],
      style: {
        color: "var(--color-primary-base)",
      },
    },
    {
      types: ["builtin", "changed", "namespace", "class-name"],
      style: {
        color: "var(--color-gray-20)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "var(--color-gray-10)",
      },
    },
    {
      types: ["inserted", "string"],
      style: {
        color: "var(--color-green-base)",
      },
    },
    {
      types: ["char", "number", "hexcode", "attr-name"],
      style: {
        color: "var(--color-primary-30)",
      },
    },
    {
      types: ["function", "tag"],
      style: {
        color: "var(--color-red-base)",
      },
    },
    {
      types: ["symbol", "regex", "operator"],
      style: {
        color: "var(--color-orange-base)",
      },
    },
    {
      types: ["comment"],
      style: {
        fontStyle: "italic",
      },
    },
  ],
}
