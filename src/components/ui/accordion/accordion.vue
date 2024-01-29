<script setup lang="ts">
import { Accordion, type AccordionProps as ArkAccordionProps } from '@ark-ui/vue'

export interface AccordionProps extends ArkAccordionProps {}

defineProps<AccordionProps>()
</script>

<template>
  <Accordion v-bind="$props">
    <slot />
  </Accordion>
</template>
