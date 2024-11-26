<script lang="ts" setup>
const username = ref('')
const password = ref('')

</script>

<template>
  <Card class="w-96 p-2 mx-auto">
    <template #content>
      <div class="space-y-4">
      <FloatLabel variant="in">
        <InputText id="username" v-model="username" fluid />
        <label for="username">Usuario</label>
      </FloatLabel>
      <FloatLabel variant="in">
        <Password id="password" v-model="password" toggleMask fluid :feedback="false" />
        <label for="password">Contraseña</label>
      </FloatLabel>
      <Button fluid>
        Iniciar sesión
      </Button>
    </div>
    </template>
  </Card>
</template>


<style>

</style>