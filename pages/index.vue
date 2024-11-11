<script setup lang="ts">
const who = ref('Diego')
const message = computed(() => `Hola ${who.value}!`)

const counter = ref(0)
function incrementCounter() {
  counter.value++
}
</script>

<template>
  <div>
    <input v-model="who" type="text">
    {{ message }}
  </div>
  <div>
    Contador: {{ counter }}
    <button @click="incrementCounter">
      Contador +
    </button>
  </div>
</template>
