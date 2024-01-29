<script setup lang="ts">
import {
  AccordionItemIndicator,
  AccordionItemTrigger,
  type AccordionItemTriggerProps as ArkAccordionItemTriggerProps
} from '@ark-ui/vue'

export interface AccordionTriggerProps extends ArkAccordionItemTriggerProps {}

defineProps<AccordionTriggerProps>()
</script>

<template>
  <AccordionItemTrigger
    v-bind="$props"
    :class="
      $cx(
        'flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline',
        $props.class
      )
    "
  >
    <slot />
    <AccordionItemIndicator class="data-[state=open]:rotate-180 transition-transform duration-200">
      <i-lucide-chevron-down />
    </AccordionItemIndicator>
  </AccordionItemTrigger>
</template>
