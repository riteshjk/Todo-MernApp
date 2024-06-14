import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests to /todo directly to the backend URL
      '/todo': {
        target: 'https://todo-mernapp-1-nltz.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/todo/, ''),

      },
      // Add other routes here as needed
    },
  },
});