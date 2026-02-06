import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  howItWorksSidebar: [
    'index',
    'how-it-works/features',
    {
      type: 'category',
      label: 'Deep Dive',
      items: [
        'how-it-works/architecture',
        'how-it-works/security',
        'how-it-works/file-structure',
        'how-it-works/lineage-tracking',
        'how-it-works/access-control',
      ],
    },
  ],
  conceptsSidebar: [
    'concepts/glossary',
  ],
};

export default sidebars;
