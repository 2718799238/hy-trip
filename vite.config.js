import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import potovw from 'postcss-px-to-viewport'

const loder_pxtovww = potovw({
  viewportWidth: 375,
  viewportUnit: 'vw'
})
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: loder_pxtovww
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },


})
