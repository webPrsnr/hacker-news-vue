<script setup lang="ts">
import LoadingDots from '../ui/loading/LoadingDots.vue'
import Comment from './Comment.vue'
import { useLoadComments } from '@/composables/useLoadComments'

const props = defineProps<{
  kids: number[] | undefined
}>()

const { comments, isLoading } = useLoadComments(props.kids)
</script>

<template>
  <div v-if="kids" class="pt-10 space-y-6">
    <LoadingDots v-if="isLoading" />
    <template v-for="comment in comments" :key="comment.title">
      <Comment :node="comment" />
    </template>
  </div>
  <p v-else class="text-muted-foreground pt-4">
    There are currently no comments for this story.
  </p>
</template>
