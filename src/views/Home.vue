<script setup lang="ts">
import { Article, Header } from '@/components/home'
</script>

<template>
  <section class="container">
    <Header />
    <div class="mt-7 border-2 border-primary p-1.5 lg:p-3 lg:w-4/5 mx-auto w-full">
      <div class="space-y-1">
        <Article>Hello world</Article>
        <Article>Hello world</Article>
        <Article>Hello world</Article>
      </div>
    </div>
  </section>
</template>
