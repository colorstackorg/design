module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials'],
  typescript: { reactDocgen: 'none' },
  webpackFinal: (config) => {
    // Removes any Webpack rules that include "svg" in the test, b/c we want to
    // use our own "svg" rule.
    config.module.rules = config.module.rules.map((rule) => {
      if (!rule.test.toString().includes('svg')) return rule;
      const test = rule.test.toString().replace('svg|', '').replace(/\//g, '');
      return { ...rule, test: new RegExp(test) };
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};
