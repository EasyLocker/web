<template>
  <div class="w-100 bg-easylocker overflow-hidden" :style="`background: url(${background}) `">

    <div class="title-font p-5 text-center">
      <h1>EasyLocker</h1>
      <slot name="subtitle"></slot>
    </div>

    <div>
      <div>
        <h4 class="font-1 ms-3">{{ title }}</h4>
      </div>

      <div class="w-100 h-auto overflow-hidden my-4">
        <div class="books-buttons">
          <slot></slot>
        </div>
      </div>

      <div class="text-center">
        <slot name="buttons">
          <b-button v-for="(txt, i) in buttons" v-bind:key="i" variant="success" class="pre-sbl-button mx-3">{{ txt }}</b-button>
        </slot>
      </div>


      <!--<div>
        <img src="../../immagini/bkgr_rosa.jpg" alt="background_pink">
      </div

       <div :style="{backgroundImage: '../../immagini/bkgr_rosa.jpg'}">
       </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    title: String,
    background: String,
    buttons: Array
  }
})
</script>

<style scoped>
.bg-easylocker {
  height: 100vh;
  background: no-repeat fixed center;
  background-size: cover;

}
</style>