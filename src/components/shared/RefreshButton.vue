<script setup lang="ts">
import BallonFit from '@/components/ui/icons/BaloonFit.vue'
import { Button } from '@/components/ui/button/'

defineProps<{
  isLoading: boolean | undefined
}>()
</script>

<template>
  <Button :disabled="isLoading" :class="isLoading ? `animate-bounce` : ``" variant="outline" size="icon" class="lg:w-16 lg:h-16 fixed right-5 bottom-1.5 w-8 h-8 rounded-full">
    <BallonFit class="lg:w-9 lg:h-9 w-4 h-4 text-primary" />
  </Button>
</template>
