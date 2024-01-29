<script setup lang="ts">
import { type VariantProps } from 'cva'

const buttonVariants = cva({
  base: 'h-9 px-4 rounded-md hover:bg-opacity-90 transition-colors',
  variants: {
    variant: {
      default: 'bg-neutral-900 text-neutral-100'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type ButtonProps = {
  variant?: ButtonVariants['variant']
}

const props = defineProps<ButtonProps>()
</script>

<template>
  <button :class="buttonVariants({ class: $attrs.class ?? '', variant: props.variant })">
    <slot />
  </button>
</template>
