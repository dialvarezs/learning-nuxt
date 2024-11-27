<script lang="ts" setup>
import { sendLogin } from '~/api/accounts'

const username = ref('')
const password = ref('')
const { execute, status } = await sendLogin(username.value, password.value)

function login() {
  execute()
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
        {{ status }}
        <Message v-if="status === 'error'" severity="error">
          Error al iniciar sesión
        </Message>
        <Button fluid :loading="status === 'pending'" @click="login">
          Iniciar sesión
        </Button>
      </div>
    </template>
  </Card>
</template>

<style>

</style>
