<template>
  <div class="mx-3 mx-md-5 my-2">
    <div class="card locker-card w-100" :style="`background-color: ${props.background}`">
      <div class="p-2">
        <div class="float-end">
          <slot name="buttons">
            <b-button v-if="props.buttonText"
                      @click.stop="onClick"
                      :disabled="disabled">
              {{ props.buttonText }}
            </b-button>
          </slot>
        </div>
        <div class="font-1 ms-3">{{props.name}}</div>
        <div class="font-2 ms-3" v-if="props.date">Prenotato il:  {{props.date}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {BButton} from "bootstrap-vue-3";

const emits = defineEmits<{
  (e: 'click'): void
}>();

const props = defineProps<{
  name: string,
  notReq?: number,
  lockerId: string,
  buttonText?: string,
  disabled?: boolean,
  date?: string,
  background: string
}>();

function onClick() {
  if (!props.disabled) emits('click')
}

</script>

<style scoped>

.locker-card {
  color: black;
  border-radius: 16px;
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
