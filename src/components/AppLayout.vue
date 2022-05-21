<template>
<main class="app-container mx-auto">
  <RouterView></RouterView>
</main>
</template>

<script lang="ts">
export default {
  name: "AppLayout"
}
</script>

<style scoped>
.app-container {
  max-width: 45rem;
}
</style>
