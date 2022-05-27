<template>
  <div class="w-100 bg-rosa overflow-hidden">

    <div class="title-font p-5 text-center">
      <h1>EasyLocker</h1>
      <h3>
        Hi {{ auth.name }}
      </h3>
    </div>


    <div>
      <h4 class="font-1 ms-3">Le tue prenotazioni</h4>
    </div>

    <div class="w-100 h-auto overflow-hidden my-4">
      <div class="books-buttons">
        <HomeButton name="ciaooo"></HomeButton>
        <HomeButton name="ciaooo"></HomeButton>
        <HomeButton name="ciaooo"></HomeButton>
        <HomeButton name="ciaooo"></HomeButton>
        <HomeButton name="ciaooo"></HomeButton>
      </div>
    </div>

    <div class="text-center">
      <b-button variant="success" class="pre-sbl-button mx-3">Prenota</b-button>
      <b-button variant="success" class="pre-sbl-button mx-3">Sblocca</b-button>
    </div>


    <!--<div>
      <img src="../../immagini/bkgr_rosa.jpg" alt="background_pink">
    </div

     <div :style="{backgroundImage: '../../immagini/bkgr_rosa.jpg'}">
     </div>-->
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import HomeButton from "@/components/HomeButton.vue";
import {BButton} from "bootstrap-vue-3";

const auth = useAuthStore();
</script>

<style>
.bg-rosa {
  height: 100vh;
  background: url("../../immagini/bkgr_rosa.jpg") center;
  background-size: cover;
}

.books-buttons {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 20px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 17px */
}

.font-1 {
  font-family: "Adobe Caslon Pro";
}

.pre-sbl-button {
  border-radius: 16px;
  background: indianred;
}

</style>



