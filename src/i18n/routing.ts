import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["hu"],

  // Used when no locale matches
  defaultLocale: "hu",
  localePrefix: "as-needed",
  localeDetection: false,

  pathnames: {
    "/": "/",

    // ...

    "/news": {
      hu: "/hirek",
    },

    // ...

    "/news/[slug]": {
      hu: "/hirek/[slug]",
    },
  },
});
