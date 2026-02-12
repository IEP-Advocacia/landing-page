import path from 'path';
import { defineConfig, loadEnv } from 'vite';
// @ts-expect-error - compression has no types
import compression from 'compression';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [
        {
          name: 'compression',
          configureServer(server: any) {
            const app = server.middlewares;
            if (Array.isArray(app.stack)) {
              app.stack.unshift({ route: '', handle: compression() });
            } else {
              app.use(compression());
            }
          },
          configurePreviewServer(server: any) {
            const app = server.middlewares;
            if (Array.isArray(app.stack)) {
              app.stack.unshift({ route: '', handle: compression() });
            } else {
              app.use(compression());
            }
          },
        },
      ],
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
