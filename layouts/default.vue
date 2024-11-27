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
</script>

<template>
  <div class="h-screen">
    <div v-if="authStore.isAuthenticated">
      <Menubar :model="menuItems">
        <template #item="{ item, props }">
          <NuxtLink :to="item.route">
            <a v-ripple v-bind="props.action">
              <span>{{ item.label }}</span>
            </a>
          </NuxtLink>
        </template>
      </Menubar>
    </div>
    <div class="container mx-auto h-full flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<style>

</style>
