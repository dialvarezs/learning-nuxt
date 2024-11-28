<script setup lang="ts">
import { getItems, updateItem } from '~/api/items'
import type { TodoItemUpdate } from '~/interfaces'

const { data: items } = await getItems()

async function completeItem(id: number) {
  const itemUpdateData: TodoItemUpdate = {
    done: true,
  }
  // Call the API to update the item
  const { execute } = await updateItem(id, itemUpdateData)
  execute()
  getItems()
}
</script>

<template>
  <div class="w-full grid grid-cols-4 gap-4">
    <TodoItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      @complete="completeItem(item.id)"
    />
  </div>
</template>

<style>

</style>
