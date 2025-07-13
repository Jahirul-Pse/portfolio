import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import fs from 'fs';

// Define component files for injection
const componentFiles = [
  'header',
  'hero',
  'about',
  'skills',
  'problem_solving',
  'projects',
  'coursework',
  'certifications',
  'education',
  'footer',
  'contact',
];

// Load component content
const components = componentFiles.reduce((acc, name) => {
  const filePath = resolve(__dirname, `components/${name}.html`);
  acc[name] = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '';
  return acc;
}, {});

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
      template: 'index.html',
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
