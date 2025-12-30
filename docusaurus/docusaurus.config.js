const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LogicIQ Documentation',
  tagline: 'Documentation for LogicIQ products',
  favicon: 'img/favicon.ico',
  url: 'https://logiciq.ca',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'LogicIQ',
  projectName: 'logiciq-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'konductor',
        path: './src/konductor/docs',
        routeBasePath: 'docs/konductor',
        sidebarPath: require.resolve('./sidebars-konductor.js'),
        versions: {
          current: {
            label: 'v0.1.0 (Latest)',
            path: '',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pvc-chonker',
        path: './src/pvc-chonker/docs',
        routeBasePath: 'docs/pvc-chonker',
        sidebarPath: require.resolve('./sidebars-pvc-chonker.js'),
        versions: {
          current: {
            label: 'v0.2.0 (Latest)',
            path: '',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'secret-santa',
        path: './src/secret-santa/docs',
        routeBasePath: 'docs/secret-santa',
        sidebarPath: require.resolve('./sidebars-secret-santa.js'),
        versions: {
          current: {
            label: 'v0.2.0 (Latest)',
            path: '',
          },
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'docs/sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

      themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'LogicIQ Docs',
        logo: {
          alt: 'LogicIQ Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },
          {
            to: '/projects',
            label: 'Projects',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Getting Started',
            docsPluginId: 'konductor',
            position: 'left',
            label: 'Konductor',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Getting Started',
            docsPluginId: 'pvc-chonker',
            position: 'left',
            label: 'PVC Chonker',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Getting Started',
            docsPluginId: 'secret-santa',
            position: 'left',
            label: 'Secret Santa',
          },
          {
            href: 'https://github.com/LogicIQ',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} LogicIQ.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;