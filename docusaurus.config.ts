import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "John Valle",
  tagline: "Frontend Developer based from the Philippines",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://vallejohn.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [tailwindPlugin],
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    },
  ],
  themeConfig: {
    metadata: [
      { name: "keywords", content: "personal site, blog, frontend, developer" },
    ],
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    image: "img/logo-dark.png",
    navbar: {
      title: "John Valle",
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/experiences", label: "Experiences", position: "left" },
        // { to: "/skills", label: "Skills", position: "left" },
      ],
      logo: {
        alt: "Site Logo",
        src: "/img/logo-light.png",
        srcDark: "/img/logo-dark.png",
        target: "_self",
        width: 48,
        height: 48,
        className: "custom-navbar-logo-class",
      },
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
