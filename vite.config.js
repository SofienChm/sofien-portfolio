import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/sofien-portfolio/',
  resolve: {
    alias: {
      '@': '/src',  // map @ to /src folder
    },
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/_variables" as *;
          @use "@/assets/scss/_mixins" as *;
          @use "@/assets/scss/_fonts" as *;
          @use "@/assets/scss/main" as *;
        `
      }
    }
  }
})
