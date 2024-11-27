<script lang="ts" setup>
import { sendLogin } from '~/api/accounts'

const username = ref('')
const password = ref('')

function login() {
  try {
    sendLogin(username.value, password.value)
  }
  catch (error) {
    console.error(error)
  }
}
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
          <Password id="password" v-model="password" toggle-mask fluid :feedback="false" />
          <label for="password">Contraseña</label>
        </FloatLabel>
        <Button fluid @click="login">
          Iniciar sesión
        </Button>
      </div>
    </template>
  </Card>
</template>

<style>

</style>
