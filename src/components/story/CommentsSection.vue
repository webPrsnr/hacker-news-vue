<script setup lang="ts">
import Comment from './Comment.vue'
import utils from './utils'

defineProps<{
  comments: any[]
}>()
</script>

<template>
  <div v-if="utils.isFilledComments(comments)" class="pt-10 space-y-6">
    <Comment v-for="comment in comments" :key="comment.title" :node="comment" />
  </div>
  <p v-else class="text-muted-foreground pt-10">
    There are currently no comments for this story.
  </p>
</template>
