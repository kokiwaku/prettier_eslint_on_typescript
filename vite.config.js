import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // localhostで接続できるように
    port: 3000, // ビルドサーバーのportを指定
  }
})
