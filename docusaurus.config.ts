import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tarf Documentation',
  tagline: 'Track and Revoke Files - Secure, Transparent, Local-First.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.tarf.app',
  baseUrl: '/',

  organizationName: 'trackandrevokefiles',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs at the site's root
          editUrl:
            'https://github.com/trackandrevokefiles/docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Tarf Docs',
      logo: {
        alt: 'Tarf Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'howItWorksSidebar',
          position: 'left',
          label: 'How it works',
        },
        {
          type: 'docSidebar',
          sidebarId: 'conceptsSidebar',
          position: 'left',
          label: 'Concepts',
        },
        {
          href: 'https://github.com/trackandrevokefiles',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'How it works',
              to: '/how-it-works/architecture',
            },
            {
              label: 'Security',
              to: '/how-it-works/security',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/trackandrevokefiles',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tarf.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
