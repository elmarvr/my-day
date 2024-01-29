<script setup lang="ts">
import {
  AccordionItemContent,
  type AccordionItemContentProps as ArkAccordionItemContentProps
} from '@ark-ui/vue'

export interface AccordionContentProps extends ArkAccordionItemContentProps {}

defineProps<AccordionContentProps>()
</script>

<template>
  <AccordionItemContent
    v-bind="$props"
    :class="
      $cx(
        'grid text-sm data-[state=open]:pb-4 grid-rows-[0fr] data-[state=open]:grid-rows-[1fr] transition-all duration-200',
        $props.class
      )
    "
  >
    <div class="overflow-hidden">
      <slot />
    </div>
  </AccordionItemContent>
</template>
