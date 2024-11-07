<script setup lang="ts">
import { getItems } from '~/api/items';

let { data: myData, execute } = await getItems()

</script>

<template>
  <div>
    {{ myData }}
    {{ myData ? myData[0].assignedTo.username : "No hay nada" }}

    <button @click="execute()">Recargar</button>
  </div>
</template>