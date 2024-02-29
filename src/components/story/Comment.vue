<script setup lang="ts">
import { ref } from 'vue'

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
    <div :style="{ 'margin-left': `${depth * 20}px` }" @click="clickHandler" v-html="node.title" />
    <div class="flex text-muted-foreground gap-4 text-xs">
      <h6 class="pl-2" :style="{ 'margin-left': `${depth * 20}px` }">
        — {{ node.by }}
      </h6>
      <span>{{ new Date(node.time).toLocaleTimeString() }}</span>
    </div>

    <div v-if="isExpanded">
      <Comment v-for="child in node.children" :key="child.title" :node="child" :depth="depth + 1" />
    </div>
  </div>
</template>
