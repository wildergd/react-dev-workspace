import * as path from 'path';
import { getBaseConfig } from '../../vite.config';

export default getBaseConfig({
  outDir: './dist',
  lib: {
    entry: path.resolve(__dirname, "src/index.ts"),
    name: "ReactComponents",
    fileName: "namespace-react-components",
  },
});
