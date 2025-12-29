/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: {
    'Getting Started': [
      'index',
      'guides/installation',
      'guides/quick-start',
      'introduction/concepts',
    ],
    'Guides': [
      'guides/sdk-integration',
    ],
    'API Reference': [
      'api/overview',
      'api/semaphore',
      'api/barrier', 
      'api/lease',
    ],
    'CLI Reference': [
      'cli/overview',
      'cli/semaphore',
    ],
    'Examples': [
      'examples/overview',
      'examples/etl-pipeline',
    ],
    'Legacy': [
      'PRODUCT_SPEC',
    ],
  },
};

module.exports = sidebars;