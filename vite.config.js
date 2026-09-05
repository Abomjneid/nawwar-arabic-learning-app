import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: '/nawwar-arabic-learning-app/', // <-- أضف هذا السطر هنا تماماً
})
