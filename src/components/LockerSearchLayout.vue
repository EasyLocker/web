<template>
  <div>
    <b-input-group prepend="Search">
      <b-form-input v-model="searchText" @keydown.enter="btnClick"></b-form-input>
      <template #append>
        <b-button variant="primary" @click.stop="btnClick" >
          <font-awesome-icon icon="magnifying-glass" />
        </b-button>
      </template>
    </b-input-group>

    <slot :lockers="data.lockers" />
  </div>
</template>


<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import axiosInstance from "@/plugins/axios";
import {BButton, BFormInput, BInputGroup} from "bootstrap-vue-3";

interface Locker {
  _id: string,
  name: string,
  latitude: number,
  longitude: number,
  width: number,
  height: number,
  depth: number,
  userId: string,
  bookedByMe: boolean,
  bookedByOthers: boolean
}

let searchText = '';
let data = reactive<{lockers?: Locker[]}>({});

onMounted(() => {
  getLockers();
})

const emits = defineEmits<{
  (e: 'click', lockers: Locker[] | undefined): void
}>()

async function getLockers() {
  try {
    const response = await axiosInstance.get('/lockers', {
      params: {
        name: searchText
      }
    })
    console.log(response.data);
    data.lockers = response.data;
  } catch (err) {
    console.log(err);
    console.log(err);
  }
}

function btnClick () {
  getLockers();
  emits('click', data.lockers);
}

</script>

<style scoped>

</style>