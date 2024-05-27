import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

export const getBaseConfig = ({ plugins = [], lib, outDir = 'dist', css }: any) =>
  defineConfig({
    plugins: [react(), ...plugins],
    build: {
      outDir,
      lib,
      rollupOptions: {
        external: isExternal,
        output: {
          globals: {
            react: 'React',
          },
        },
      },
    },
    css,
  });
