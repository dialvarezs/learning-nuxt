<script lang="ts" setup>
import type { MenuItem } from "primevue/menuitem";

const menuItems: MenuItem[] = [
  { label: "Home", route: "/" },
  {
    label: "Items",
    items: [
      { label: "Listar Items", route: "/items" },
      { label: "Nuevo Item", route: "/items/new" },
    ],
  },
];

function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
}
</script>

<template>
  <div class="h-screen flex flex-col">
    <header>
      <Menubar
        :model="menuItems"
        :pt="{
          root: {
            class: 'container mx-auto !p-3',
          },
        }"
      >
        <template #item="{ item, props, hasSubmenu }">
          <NuxtLink :to="item.route">
            <a v-ripple v-bind="props.action">
              <span v-ripple>
                {{ item.label }}
              </span>
              <span v-if="hasSubmenu">></span>
            </a>
          </NuxtLink>
        </template>
        <template #end>
          <button @click="toggleDarkMode">Toggle Dark Mode</button>
        </template>
      </Menubar>
    </header>
    <div class="container grow flex mx-auto pt-4">
      <div class="mr-4">
        <Menu :model="menuItems" />
      </div>
      <div class="grow">
        <slot />
      </div>
    </div>
    <footer>My footer</footer>
  </div>
</template>
