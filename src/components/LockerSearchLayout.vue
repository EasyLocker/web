<template>
  <div>
    <b-input-group prepend="Search">
      <b-form-input v-model="state.searchText" @keydown.enter="btnClick"></b-form-input>
      <template #append>
        <b-button variant="primary" @click.stop="btnClick" >
          <font-awesome-icon icon="magnifying-glass" />
        </b-button>
      </template>
    </b-input-group>

    <slot :lockers="state.lockers" :reload="getLockers" />
  </div>
</template>


<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import axiosInstance from "@/plugins/axios";
import {BButton, BFormInput, BInputGroup} from "bootstrap-vue-3";
import type Locker from "@/models/Locker";


let state = reactive<{
  searchText: string,
  lockers?: Locker[]
}>({
  searchText: ''
});


onMounted(() => {
  getLockers();
})

const emits = defineEmits<{
  (e: 'click', lockers: Locker[] | undefined): void
}>()

async function getLockers() {
  try {
    // for (let i = 0; i < 5; i++) {
    //   axiosInstance.post('/lockers', {
    //     name: 'Wow ' + i,
    //     latitude: 10,
    //     longitude: 10,
    //     width: 10,
    //     height: 10,
    //     depth: 10,
    //   }).then()
    // }

    const response = await axiosInstance.get('/lockers', {
      params: {
        name: state.searchText
      }
    })
    state.lockers = response.data;
  } catch (ignored) {}
}

function btnClick () {
  getLockers();
  emits('click', state.lockers);
}

</script>

<style scoped>

</style>
