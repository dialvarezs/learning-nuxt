<script lang="ts" setup>
import type { MenuItem } from 'primevue/menuitem'

const menuItems: MenuItem[] = [
  { label: 'Inicio', route: '/' },
  { label: 'Items', items: [
    { label: 'Listar items', route: '/items' },
    { label: 'Nuevo item', route: '/items/new' },
  ] },
]
</script>

<template>
  <div>
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
  <div class="py-4 px-W8">
    <slot />
  </div>
</template>

<style>

</style>
