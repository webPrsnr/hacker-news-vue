<script setup lang="ts">
import { Article, Header, Score } from '@/components/home'
</script>

<template>
  <section class="container">
    <Header />
    <div class="mt-7 border-2 border-primary p-3 w-4/5 mx-auto">
      <div class="space-y-1">
        <div class="flex gap-1">
          <Score />
          <Article>Hello world</Article>
        </div>
      </div>
    </div>
  </section>
</template>
