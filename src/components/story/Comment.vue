<script setup lang="ts">
import { ref } from 'vue'
import CaretLeft from '@/components/ui/icons/CaretLeft.vue'
import CaretDown from '@/components/ui/icons/CaretDown.vue'

withDefaults(defineProps<{
  node: any
  depth?: number
}>(), {
  depth: 0,
})

const isExpanded = ref(false)

function clickHandler() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="text-sm my-3">
    <div :style="{ 'margin-left': `${depth * 20}px` }" v-html="node.title" />
    <ul class="flex text-muted-foreground gap-4 text-xs">
      <li class="pl-2" :style="{ 'margin-left': `${depth * 20}px` }">
        — {{ node.by }}
      </li>
      <li>{{ new Date(node.time).toLocaleTimeString() }}</li>
      <li class="hover:underline cursor-pointer flex items-center" @click="clickHandler">
        <template v-if="isExpanded">
          close comments <span><CaretDown /></span>
        </template>
        <template v-else>
          load more comments <span><CaretLeft /></span>
        </template>
      </li>
    </ul>

    <div v-if="isExpanded">
      <Comment v-for="child in node.children" :key="child.title" :node="child" :depth="depth + 1" />
    </div>
  </div>
</template>
