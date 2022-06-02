<template>
    <div class="w-100 bg-easylocker font" :style="`background-image: url(${background})`">

      <div class="title-font mt-5 mb-4 text-center">
        <h1>EasyLocker</h1>
        <slot name="subtitle"></slot>
      </div>

      <div>
        <div>
          <h2 class="font mx-2 mx-sm-4">{{ title }}</h2>
        </div>

        <div class="w-100 overflow-hidden my-3">
          <div class="content">
            <div class="mx-2 mx-sm-4">
              <slot/>
            </div>
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

<style scoped lang="scss">
$height: calc(95vh - 56px);

.bg-easylocker {
  height: $height;
  background-size: cover;
  background-position: center;
}

.content {
  //width: 100%;
  height: 65vh;
  overflow-y: scroll;
  margin-right: -17px;
  //padding-right: -20px; /* Increase/decrease this value for cross-browser compatibility */
  //box-sizing: content-box; /* So the width will be 100% + 17px */
  //-moz-box-sizing: content-box;
  //-webkit-box-sizing: content-box;
}

.font{
  font-family: "Adobe Caslon Pro";
}
</style>