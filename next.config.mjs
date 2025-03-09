import nextra from 'nextra';

const withNextra = nextra({
  // Your Nextra configuration options here
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default withNextra({
  // Your Next.js configuration options here
});
