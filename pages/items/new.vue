<script lang="ts" setup>
import type { TodoItemCreate } from "~/interfaces";
import { getUsers } from "~/api/accounts";
import { createItem } from "~/api/items";

const item: TodoItemCreate = reactive({
  title: "",
  assignedToId: null,
  categories: [],
});
const { data: users } = await getUsers();
const { execute: saveItem } = await createItem(item);

</script>

<template>
  <div class="space-y-5">
    <h1 class="text-xl">Nuevo Item</h1>
    <FloatLabel class="w-full md:w-96" variant="on">
      <InputText v-model="item.title" input-id="title" class="w-full" />
      <label for="title">Título</label>
    </FloatLabel>
    <FloatLabel class="w-full md:w-96" variant="on">
      <Select
        v-model="item.assignedToId"
        input-id="assignedtoid"
        :options="users || []"
        option-label="fullname"
        option-value="id"
        class="w-full"
      />
      <label for="assignedtoid">Asignado a</label>
    </FloatLabel>
    <Button @click="saveItem()">Guardar</Button>
  </div>
</template>
