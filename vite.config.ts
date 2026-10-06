import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { agentApi } from './server/api.ts';

export default defineConfig({
  plugins: [vue(), agentApi()],
  server: { port: 5199 },
});
