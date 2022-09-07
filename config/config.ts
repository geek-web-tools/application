import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'pc',
  keepalive: ['*'],
  aconsole: {
    console: {},
    inspx: {},
  },

  mfsu: {},
  hash: true,
  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
});
