import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
      animated: 'src/animated.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    splitting: true,
    treeshake: true,
    clean: true,
    minify: false,
    sourcemap: true,
    external: ['react', 'react-dom', 'framer-motion'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
  },
  {
    entry: ['src/styles.css'],
    outDir: 'dist',
  },
])
