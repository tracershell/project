import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // 여기를 원하는 포트로 설정 : 설정하지 않으면 기본값은 5173
  },
})
