<template>
  <div>
    <b-input-group prepend="Cerca">
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


const props = defineProps({
  showAll: {
    type: Boolean,
    default: false,
  },
});

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

    const response = await axiosInstance.get('/lockers' + (props.showAll ? '' : '/available'), {
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
