<script setup lang="ts">
import { getItems } from '~/api/items'

const { data: items } = await getItems()

function showCompleteAlert(id: number) {
  alert(`Completado evento ${id}`)
}
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <TodoItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      @complete="showCompleteAlert(item.id)"
    />
  </div>
</template>

<style>

</style>
