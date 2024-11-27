<script lang="ts" setup>
import { getMyUser, sendLogin } from '~/api/accounts'

const authStore = useAuthStore()
const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function login() {
  try {
    error.value = ''
    loading.value = true
    const tokenData = await sendLogin(username.value, password.value)
    // Save token in the store
    authStore.setToken(tokenData)

    const { data: user } = await getMyUser()
    if (user.value) {
      authStore.setUser(user.value)
    }
  }
  catch (e) {
    error.value = 'Error al iniciar sesión'
    console.error(e)
  }
  finally {
    loading.value = false
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
        <Message v-if="error !== ''" severity="error">
          Error al iniciar sesión
        </Message>
        <Button fluid :loading="loading" @click="login">
          Iniciar sesión
        </Button>
      </div>
    </template>
  </Card>
</template>

<style>

</style>
