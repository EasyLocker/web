<template>
  <div class="w-100 layout-container d-flex flex-column" :style="style">

    <div class="el-font pt-5 pb-4 text-center flex-grow-0">
      <h1>EasyLocker</h1>
      <slot name="subtitle"></slot>
    </div>

    <div class="flex-grow-0">
      <h2 class="el-font mx-2 mx-sm-4">{{ props.title }}</h2>
    </div>

    <!--      <div class="w-100 my-3  ">-->
    <div class="flex-grow-1 position-relative">
      <div class="content-container">
        <div class="mx-2 mx-sm-4">
          <slot/>
        </div>
      </div>
    </div>
    <!--      </div>-->

    <div class="text-center flex-grow-0 mt-4 mb-5">
      <slot name="buttons">
        <b-button v-for="(btnProps, i) in props.buttons"
                  v-bind:key="i"
                  variant="secondary"
                  pill
                  size="lg"
                  class="el-button mx-3 el-font"
                  @click="btnProps.action">

          {{ btnProps.text }}
        </b-button>
      </slot>
    </div>


    <!--<div>
      <img src="../../images/bkgr_rosa.jpg" alt="background_pink">
    </div

     <div :style="{backgroundImage: '../../images/bkgr_rosa.jpg'}">
     </div>-->
  </div>
</template>

<script lang="ts" setup>
import {BButton} from "bootstrap-vue-3";
import {computed} from "vue";

const props = defineProps<{
  title: string,
  background: string,
  buttons?: {
    text: string,
    action: () => void
  }[]
}>();

const style = computed(() => {
  return {
    backgroundImage: `url(${props.background})`
  }
})

</script>

<style scoped lang="scss">
$navbar-height: 56px;
$height: calc(100vh - #{$navbar-height});
$buttons-margin-bottom: calc(#{$navbar-height} + 50px);

.layout-container {
  height: $height;
  background-size: cover;
  background-position: center;
}

.content-container {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;

  //width: 100%;
  height: 100%;
  overflow-y: auto;
  margin-right: -17px;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 17px */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
}

.buttons-container {
  margin-bottom: $buttons-margin-bottom;
}

.el-font {
  font-family: "Adobe Caslon Pro";
}

</style>
