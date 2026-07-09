import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        bypass: function (req, res, options) {
          if (req.url.includes('.tsx') || req.url.includes('.ts') || req.url.includes('.js')) {
            return req.url;
          }
        }
      },
      '/admin': {
        target: 'http://localhost:3000',
        bypass: function (req, res, options) {
          if (req.url.includes('.tsx') || req.url.includes('.ts') || req.url.includes('.js')) {
            return req.url;
          }
        }
      }
    }
  }
});
