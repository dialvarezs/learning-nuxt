<script lang="ts" setup>
import type { MenuItem } from 'primevue/menuitem'

const authStore = useAuthStore()

const menuItems: MenuItem[] = [
  { label: 'Inicio', route: '/' },
  { label: 'Items', items: [
    { label: 'Listar items', route: '/items' },
    { label: 'Nuevo item', route: '/items/new' },
  ] },
]

function logout() {
  authStore.clearData()
  navigateTo('/login')
}
</script>

<template>
  <Menubar v-if="authStore.isAuthenticated" :model="menuItems">
    <template #item="{ item, props }">
      <NuxtLink :to="item.route">
        <a v-ripple v-bind="props.action">
          <span>{{ item.label }}</span>
        </a>
      </NuxtLink>
    </template>
    <template v-if="authStore.isAuthenticated" #end>
      <span class="mx-4">
        Hola, {{ authStore.user?.fullname }}!
      </span>
      <Button variant="outlined" @click="logout">
        Cerrar sesión
      </Button>
    </template>
  </Menubar>
</template>
