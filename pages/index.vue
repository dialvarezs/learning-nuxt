<script setup lang="ts">
const who = ref("Diego")
const message = computed(() => `Hola ${who.value}!`)

const counter = ref(0)
const incrementCounter = () => {
  counter.value++
}
</script>

<template>
  <div>
    <input type="text" v-model="who" >
    {{ message }}
  </div>
  <div>
    Contador: {{ counter }}
    <button @click="incrementCounter">Contador +</button>
  </div>
</template>

<style>

</style>