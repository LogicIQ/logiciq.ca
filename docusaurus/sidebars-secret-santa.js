/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const secretSantaSidebar = {
  'Getting Started': [
    'index',
    'guides/installation',
    'guides/quick-start',
    'introduction/concepts',
  ],
  'Guides': [
    'guides/generators',
    'guides/media-providers',
  ],
  'Examples': [
    'examples/overview',
    'examples/basic-password',
    'examples/aws-secrets-manager',
    'examples/tls-self-signed',
  ],
  'Contributing': [
    'contributing/process',
  ],
};

module.exports = secretSantaSidebar;