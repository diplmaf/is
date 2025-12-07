import { defineConfig } from '@storybook/vue3'

export default defineConfig({
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite',
  },
})
