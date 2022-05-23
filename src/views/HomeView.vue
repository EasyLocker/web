<template>
  <div class="title-font m-5 p-2 text-center">
    <h1>EasyLocker</h1>
    <h3>
      Hi {{auth.name}}
    </h3>

  </div>


  <div class="has-bg-img">
    <img class="bg-img" src="../../immagini/bkgr_rosa.jpg" alt="background_pink">
  </div>

</template>

<script setup lang="ts">

  import {useAuthStore} from "@/stores/auth";

  const auth = useAuthStore();

</script>

.has-bg-img{

}
