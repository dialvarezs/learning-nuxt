<script lang="ts" setup>
import type { TodoItem } from '~/interfaces';

const props = defineProps<{
  item: TodoItem
}>()

const emit = defineEmits({
  complete: () => { }
})
</script>

<template>
  <Card>
    <template #title>
      <p class="m-0">
        {{ item.title }}
      </p>
    </template>
    <template #content>
      <div class="space-x-2">
        <Tag v-for="category in item.categories" :key="category.id" :value="category.name" severity="secondary" :pt="{
          root: {
            class: '!py-0'
          }
        }" />
      </div>
      <div class="text-gray-400 text-">Asignado a: {{ item.assignedTo.fullname }}</div>
    </template>
    <template #footer>
      <Button v-if="!item.done" :pt="{ root: { class: '!py-0 !px-2' } }" @click="emit('complete')">Completar</Button>
    </template>
  </Card>
</template>


<style></style>