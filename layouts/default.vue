<script lang="ts" setup>
</script>

<template>
  <div class="h-screen flex flex-col">
    <Toast position="bottom-right" />
    <BaseHeader />
    <div class="container mx-auto grow flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<style>

</style>
