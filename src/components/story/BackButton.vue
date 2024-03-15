<script setup lang="ts">
import ChevronLeft from '../ui/icons/ChevronLeft.vue'
import { Button } from '../ui/button/'

type PathString = 'home'

defineProps<{
  backPath: PathString
}>()
</script>

<template>
  <div>
    <RouterLink :to="{ name: backPath }">
      <Button variant="outline" size="icon">
        <ChevronLeft class="text-primary w-4 h-4" />
      </Button>
    </RouterLink>
  </div>
</template>
