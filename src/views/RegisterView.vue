<template>
  <div>
    <n-input v-model:value="text"></n-input>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RegisterView",
  setup() {
    return {
      text: ref("Questo te lo scrivo da codice"),
      data: [1, 5, 7],
    };
  },
});
</script>

<style scoped></style>
