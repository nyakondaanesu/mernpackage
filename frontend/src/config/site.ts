export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "mern.js",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Settings",
      href: "/settings",
    },
  ],
  links: {
    github: "https://github.com/nyakondaanesu",
    twitter: "https://x.com/anesuznyakonda",
    docs: "https://heroui.com",
    discord: "https://instagram/anesunyakonda",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
