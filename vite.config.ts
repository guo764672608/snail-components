import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'dist', // 自定义构建输出目录
    target: 'es2020',
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      plugins: []
    }
  },
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      include: ['./src'],
      tsconfigPath: './tsconfig.app.json'
    })
  ]
})
