<script setup lang="ts">
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'

const emits = defineEmits<{
  refreshClickHandler: [page: number]
}>()

function handleClick(item: number) {
  emits('refreshClickHandler', item)
}
</script>

<template>
  <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="1" :items-per-page="15" class="flex justify-center py-4">
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst class="w-8 h-8 lg:w-10 lg:h-10" />
      <PaginationPrev class="w-8 h-8 lg:w-10 lg:h-10" />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button class="lg:w-10 lg:h-10 lg:p-0 w-3.5 h-3.5 p-3.5" :variant="item.value === page ? 'default' : 'outline'" @click="handleClick(item.value)">
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext class="w-8 h-8 lg:w-10 lg:h-10" />
      <PaginationLast class="w-8 h-8 lg:w-10 lg:h-10" />
    </PaginationList>
  </Pagination>
</template>
