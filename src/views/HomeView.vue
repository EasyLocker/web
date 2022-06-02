<template>

  <ViewLayout title="Le tue prenotazioni" :buttons="['Prenota', 'Sblocca']" background="../../immagini/bkgr_rosa.jpg">
    <template v-slot:subtitle>
      <div>
        <h3>
          Hi {{ auth.name }}
        </h3>
      </div>
    </template>

    <HomeButton name="ciaooo"></HomeButton>
    <HomeButton name="ciaooo"></HomeButton>
    <HomeButton name="ciaooo"></HomeButton>
    <HomeButton name="ciaooo"></HomeButton>
    <HomeButton name="ciaooo"></HomeButton>
  </ViewLayout>

</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import HomeButton from "@/components/HomeButton.vue";
import {BButton} from "bootstrap-vue-3";
import ViewLayout from "@/components/ViewLayout.vue";
import IconDocumentation from "@/components/old_components/icons/IconDocumentation.vue";

const auth = useAuthStore();
</script>

<style scoped>

.font-1 {
  font-family: "Adobe Caslon Pro";
}

.pre-sbl-button {
  border-radius: 16px;
  background: indianred;
}

</style>



