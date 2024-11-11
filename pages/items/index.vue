<script setup lang="ts">
import { getItems } from "~/api/items";

const { data: items, execute, status: loading } = await getItems();
</script>

<template>
  <div class="flex-col space-y-2">
    <div class="text-end">
      <Button
        label="Recargar"
        :loading="loading === 'pending'"
        @click="execute()"
      />
    </div>

    <DataTable :value="items">
      <Column field="id" header="ID" />
      <Column field="title" header="Título" />
      <Column field="done" header="Completado" />
      <Column field="assignedTo" header="Asignado a">
        <template #body="{ data }">
          {{ data.assignedTo.fullname }}
        </template>
      </Column>
      <Column field="categories" header="Categorías">
        <template #body="{ data }">
          <Chip
            v-for="category in data.categories"
            :key="category.id"
            :label="category.name"
            :pt="{ root: { class: '!py-1' } }"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>
