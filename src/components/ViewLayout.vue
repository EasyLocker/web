<template>
  <div class="w-100 bg-easylocker overflow-hidden" :style="`background-image: url(${props.background})`">

      <div class="title-font mt-5 mb-4 text-center">
        <h1>EasyLocker</h1>
        <slot name="subtitle"></slot>
      </div>

      <div>
        <div>
          <h2 class="font mx-2 mx-sm-4">{{ props.title }}</h2>
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
          <b-button v-for="(btnProps, i) in props.buttons"
                    v-bind:key="i"
                    variant="success"
                    class="pre-sbl-button mx-3"
                    @click="btnProps.action">
            {{ btnProps.text }}
          </b-button>
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

<script lang="ts" setup>
import {BButton} from "bootstrap-vue-3";

const props = defineProps<{
  title: string,
  background: string,
  buttons?: {
    text: string,
    action: () => void
  }[]
}>();

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

.pre-sbl-button {
  border-radius: 16px;
  background: indianred;
}

</style>
