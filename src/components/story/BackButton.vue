<script setup lang="ts">
import { useRouter } from 'vue-router'
import ChevronLeft from '../ui/icons/ChevronLeft.vue'
import { Button } from '../ui/button/'

const router = useRouter()
</script>

<template>
  <div>
    <Button variant="outline" size="icon" @click="() => router.back()">
      <ChevronLeft class="text-primary w-4 h-4" />
    </Button>
  </div>
</template>
