import { fileURLToPath, URL } from 'node:url'
import { existsSync } from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import vueRouter from 'unplugin-vue-router/vite'
import macros from 'unplugin-vue-macros/vite'
import icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueRouter(),
    macros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      }
    }),
    components({
      dts: true,
      resolvers: [UiResolver, IconsResolver()]
    }),
    icons(),
    autoImport({
      include: [
        /\.tsx?$/,
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          '@tanstack/vue-query': ['useQuery'],
          '~/lib/utils.ts': ['cva', 'cx', 'compose']
        }
      ],
      dts: true
    })
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

function pascalToKebabCase(str: string) {
  return str
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}

function UiResolver(name: string) {
  if (name.startsWith('Ui')) {
    const componentName = name.slice(2)
    const fileName = pascalToKebabCase(componentName)
    const namespace = fileName.split('-')[0]
    const dir = '/components/ui'

    const path = `${dir}/${fileName}.vue`
    const pathWithNamespace = `${dir}/${namespace}/${fileName}.vue`

    if (existsSync(`src${pathWithNamespace}`)) {
      return {
        from: `~${pathWithNamespace}`
      }
    }

    return {
      from: `~${path}`
    }
  }
}
