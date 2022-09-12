/*
 * @Description: your description
 * @Module: module.name
 * @Author: draco
 * @Email: draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2022-09-12 15:29:23
 * @LastEditTime: 2022-09-12 18:28:19
 */
import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'pc',
  // keepalive: ['*'],
  // aconsole: {
  //   console: {},
  //   inspx: {},
  // },
  routes: [
    { path: '/', component: '@/pages/index', icon: 'nav', title: '前端导航' },
    { path: '/lucky', component: '@/pages/lucky', icon: 'lucky', title: '今天吃什么?' },
  ],
  targets: {
    ie: 11,
    ios: 10,
  },
  mfsu: {},
  hash: true,
  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
});
