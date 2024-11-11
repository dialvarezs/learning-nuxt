<script setup lang="ts">
import { getItems } from '~/api/items'

const { data: items, execute } = await getItems()
</script>

<template>
  <div>
    {{ items }}

    <button @click="execute()">
      Recargar
    </button>
  </div>
</template>
