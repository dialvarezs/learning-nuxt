<script lang="ts" setup>
import type { TodoItemCreate } from "~/interfaces";
import { getUsers } from "~/api/accounts";

const { data: users } = await getUsers();
const item: TodoItemCreate = reactive({
  title: "",
  assignedToId: null,
  categories: [],
});
</script>

<template>
  <div>
    <FloatLabel class="w-full" variant="on">
      <Select
        v-model="item.assignedToId"
        input-id="assignedtoid"
        :options="users || []"
        optionLabel="fullname"
        class="w-full"
      />
      <label for="assignedtoid">Asignado a</label>
    </FloatLabel>
  </div>
</template>
