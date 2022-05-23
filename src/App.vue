<template>
  <AppLayout/>

  <NavBar/>
</template>

<script setup lang="ts">
import AppLayout from "@/components/AppLayout.vue";
import {useAuthStore} from "@/stores/auth";
import {updateHeaders} from "@/plugins/axios";

const auth = useAuthStore();
auth.$subscribe(state => {
  localStorage.setItem("authStore", JSON.stringify(state.events.target));
});
updateHeaders(auth.token);

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Averia+Libre:ital,wght@1,300&family=Carter+One&family=Ubuntu:wght@300&display=swap');

.title-font {
  font-family: Carter One, serif;
}

.reg-font {
  font-family: Ubuntu, serif;
}

.btn {
  font-family: Ubuntu, serif;
}


</style>
