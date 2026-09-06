import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nawwar-arabic-learning-app/', // صحيح لاستضافة المشروع على https://<user>.github.io/nawwar-arabic-learning-app
  plugins: [react()],
})
