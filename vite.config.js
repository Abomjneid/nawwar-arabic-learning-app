import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nawwar-arabic-learning-app/', // صحيح لصفحة المشروع
  plugins: [react()],
})
