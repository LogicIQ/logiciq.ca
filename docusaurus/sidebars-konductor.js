/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const konductorSidebar = {
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
};

module.exports = konductorSidebar;