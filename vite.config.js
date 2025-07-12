import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

const components = {
  header: resolve(__dirname, 'components/header.html'),
  hero: resolve(__dirname, 'components/hero.html'),
  about: resolve(__dirname, 'components/about.html'),
  skills: resolve(__dirname, 'components/skills.html'),
  problemSolving: resolve(__dirname, 'components/problem-solving.html'),
  projects: resolve(__dirname, 'components/projects.html'),
  coursework: resolve(__dirname, 'components/coursework.html'),
  certifications: resolve(__dirname, 'components/certifications.html'),
  education: resolve(__dirname, 'components/education.html'),
  footer: resolve(__dirname, 'components/footer.html'),
  contact: resolve(__dirname, 'components/contact.html'),
};

export default defineConfig({
  root: '.',
  build: {
    outDir: 'build/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: components,
      },
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'assets'),
      '@components': resolve(__dirname, 'components'),
    },
  },
});