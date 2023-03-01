import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-minification';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/index.min.js',
      format: 'esm',
      sourcemap: true,
      plugins: [terser()]
    },
    {
      file: 'dist/types/index.d.ts',
      format: 'es'
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json'
    })
  ],
  external: []
};
