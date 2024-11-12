<script lang="ts" setup>
import { getUsers } from '~/api/accounts'
import { createItem } from '~/api/items'
import type { TodoItemCreate } from '~/interfaces'

const item: TodoItemCreate = reactive({
  title: '',
  assignedToId: null,
  categories: [],
})
const { data: users } = await getUsers()
const { execute: saveItem, status: saveStatus } = await createItem(item)

async function saveAndRedirect() {
  await saveItem()
  navigateTo("/items")
}
</script>

<template>
  <div class="space-y-6">
    <FloatLabel class="w-full md:w-96">
      <InputText id="itemTitle" v-model="item.title" class="w-full" />
      <label for="itemTitle">Título</label>
    </FloatLabel>
    <FloatLabel class="w-full md:w-96">
      <Select id="itemAssignedTo" v-model="item.assignedToId" :options="users || []" option-label="fullname" option-value="id" class="w-full" />
      <label for="itemAssignedTo">Asignado a</label>
    </FloatLabel>
    <Button @click="saveAndRedirect" :loading="saveStatus === 'pending'">
      Guardar
    </Button>
  </div>
</template>
