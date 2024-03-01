<script setup lang="ts">
import { watch } from 'vue'
import LoadingDots from '../ui/loading/LoadingDots.vue'
import Comment from './Comment.vue'
import { useLoadComments } from '@/composables/useLoadComments'

const props = defineProps<{
  kids: number[] | undefined
}>()

const emits = defineEmits<{
  loadCommentsFlag: [boolean]
  refreshHandler: [() => void]
}>()

const { comments, isLoading, refreshHandler } = useLoadComments(props.kids)

watch(isLoading, (status) => {
  emits('loadCommentsFlag', status)
  emits('refreshHandler', refreshHandler)
}, { immediate: true })
</script>

<template>
  <div v-if="kids" class="pt-10 space-y-6">
    <LoadingDots v-if="isLoading" />
    <template v-else>
      <Comment v-for="comment in comments" :key="comment.title" :node="comment" />
    </template>
  </div>
  <p v-else class="text-muted-foreground pt-10">
    There are currently no comments for this story.
  </p>
</template>
