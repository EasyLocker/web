<template>

  <div class="bg-rosa">

    <div class="title-font m-5 p-2 text-center">
      <h1>EasyLocker</h1>
      <h3>
        Hi {{auth.name}}
      </h3>
    </div>


    <div>
      <h4 class="font-1">Le tue prenotazioni</h4>
    </div>

    <div class="button-list">
      <div><ButtonHome name="ciaooo">    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
      <div><ButtonHome>    </ButtonHome></div>
    </div>

    <div>CIao</div>
    <div>ciao</div>





  <!--<div>
    <img src="../../immagini/bkgr_rosa.jpg" alt="background_pink">
  </div

   <div :style="{backgroundImage: '../../immagini/bkgr_rosa.jpg'}">
   </div>-->



  </div>
</template>

<script setup lang="ts">

  import {useAuthStore} from "@/stores/auth";

  const auth = useAuthStore();

</script>

<style>
.bg-rosa {
  background-image: url("../../immagini/bkgr_rosa.jpg");
}

.font-1{
  font-family: "Adobe Caslon Pro";
}

.button-list{
  overflow-x: hidden;
  overflow-y: scroll;
}

</style>



