import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // 'views': path.resolve(__dirname, 'src/views'),
      //配置图片
      "/img": "./src/assets",
    },
  },
  plugins: [vue()],
})
