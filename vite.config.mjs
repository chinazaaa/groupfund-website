import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    publicDir: 'public',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
    define: {
      // Expose API_URL from .env file
      'import.meta.env.API_URL': JSON.stringify(env.API_URL || env.VITE_API_URL || ''),
      'import.meta.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL || env.API_URL || ''),
    },
  }
})

