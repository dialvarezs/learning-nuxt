<script lang="ts" setup>
import { getCurrentUser, sendLogin } from '~/api/accounts'

const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const authStore = useAuthStore()
const toast = useToast()

async function login() {
  try {
    error.value = ''
    loading.value = true
    // Get and save token in the store
    const tokenData = await sendLogin(username.value, password.value)
    authStore.setToken(tokenData)

    // Get and save user in the store
    const { data: user } = await getCurrentUser()
    if (user.value) {
      authStore.setUser(user.value)
    }

    // Show a message
    toast.add({
      severity: 'success',
      summary: 'Inicio de sesión exitoso',
      detail: `Bienvenido de nuevo, ${user.value?.fullname}`,
      life: 2000,
    })

    navigateTo('/')
  }
  catch (e) {
    error.value = 'Error al iniciar sesión'
    console.error(e)
  }
  finally {
    loading.value = false
  }
}

// Clear the store data when the component is mounted
authStore.clearData()
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
