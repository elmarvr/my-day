<script setup lang="ts">
import { AccordionItem, type AccordionItemProps as ArkAccordionItemProps } from '@ark-ui/vue'

export interface AccordionItemProps extends ArkAccordionItemProps {}

defineProps<AccordionItemProps>()
</script>

<template>
  <AccordionItem v-bind="$props" :class="$cx('border-b border-neutral-200', $props.class)">
    <slot />
  </AccordionItem>
</template>
