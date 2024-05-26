import * as path from 'path';
import { getBaseConfig } from '../../vite.config';

export default getBaseConfig({
  outDir: '../lib',
  lib: {
    entry: path.resolve(__dirname, "src/index.ts"),
    name: "ViteCommon",
    fileName: "vite-common",
  },
});
