<template>
  <div class="mx-3 mx-md-5 my-2">
    <div class="card home-button w-100">
      <div class="p-2">
        <b-button class="float-end" :disabled="disabled">{{ props.buttonText }}</b-button>
        <div class="font-1 ms-3">{{props.name}}</div>
        <div class="font-2 ms-3">Via Stazione</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {BButton} from "bootstrap-vue-3";

const props = defineProps<{
  name: string,
  notReq?: number,
  lockerId: string,
  buttonText: string,
  disabled: boolean
}>();

</script>

<style scoped>

.home-button {
  background-color: #87CEFA;
  color: black;
  border-radius: 16px;
  height: 60px;
  width: 500px;
}

.font-1{
  font-family: "Adobe Caslon Pro";
  font-size: 16px;
  text-align: left;
}

.font-2{
  font-size: 10px;
  font-family: "Adobe Caslon Pro";
  text-align: left;
}

</style>
