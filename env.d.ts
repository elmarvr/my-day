import {} from '@vue/runtime-core'

/// <reference types="vite/client" />

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $cx: typeof cx
  }
}
