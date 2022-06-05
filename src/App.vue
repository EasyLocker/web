<template>
  <b-container :toast="{root: true}" fluid="sm" position="position-fixed"></b-container>

  <AppLayout/>

  <NavBar/>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import type {StateTree} from "pinia";
import {onMounted} from "vue";
import NavBar from "@/components/NavBar.vue";
import AppLayout from "@/components/AppLayout.vue";

onMounted(() => {
  const auth = useAuthStore();
  auth.$subscribe((state: StateTree) => {
    localStorage.setItem("authStore", JSON.stringify(state.events.target));
  });
});

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Averia+Libre:ital,wght@1,300&family=Carter+One&family=Ubuntu:wght@300&display=swap');

</style>
