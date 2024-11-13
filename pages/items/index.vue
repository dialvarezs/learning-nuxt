<script setup lang="ts">
import { getItems } from '~/api/items'

const { data: items, refresh } = await getItems()
</script>

<template>
  <div>
    <Button @click="refresh()">
      Recargar
    </Button>
    <DataTable :value="items">
      <Column field="title" header="Título" />
      <Column field="done" header="Completado" />
      <Column field="assignedTo" header="Asignado a">
        <template #body="{ data }">
          {{ data.assignedTo.fullname }}
        </template>
      </Column>
      <Column field="categories" header="Categorías">
        <template #body="{ data }">
          <div class="space-x-2">
            <Tag
              v-for="category in data.categories"
              :key="category.id"
              :value="category.name"
              severity="contrast"
              :pt="{
                root: {
                  class: '!py-0',
                },
              }"
            />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
