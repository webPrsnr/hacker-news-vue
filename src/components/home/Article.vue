<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import Separator from '../ui/separator/Separator.vue'
import AuthorFill from '../ui/icons/AuthorFill.vue'
</script>

<template>
  <div class="w-full items-center bg-muted rounded-lg py-2 px-3 rounded-tl-none rounded-bl-none flex">
    <h6 class="flex-1 text-base">
      <slot />
    </h6>
    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground ">Date: 2 hours ago</span>
      <Separator orientation="vertical" />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <AuthorFill class="h-5 w-5 hover:text-primary" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Author: William124124124124124124124</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>
