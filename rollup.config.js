import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'ArthaOnOffRamp',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'tailwindcss', "antd"],
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
    terser(),
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      config: {
        path: './postcss.config.js',
      },
    }),
  ],
}; 