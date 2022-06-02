<template>
  <ViewLayout title="Crea Armadietti" background="../../immagini/bkge_verde.jpg">
    <b-form>
      <div class="mb-2 font">
        <span>Nome</span>
        <b-form-input required v-model="locker.name"/>
      </div>

      <div class="mb-2 font">
        <span>Latitudine</span>
        <b-form-input v-model="locker.latitude"/>
      </div>

      <div class="mb-2 font">
        <span>Longitudine</span>
        <b-form-input v-model="locker.longitude"/>
      </div>

      <div class="mb-2 font">
        <span>Larghezza</span>
        <b-form-input v-model="locker.width"/>
      </div>

      <div class="mb-2 font">
        <span>Altezza</span>
        <b-form-input v-model="locker.height"/>
      </div>

      <div class="mb-2 font">
        <span>Profondità</span>
        <b-form-input v-model="locker.depth"/>
      </div>

      <b-button class="float-end button" @click.prevent="createLocker">Crea</b-button>
    </b-form>
  </ViewLayout>
</template>

<script lang="ts" setup>
import {BButton, BForm, BFormInput} from "bootstrap-vue-3";
import {useAuthStore} from "@/stores/auth";
import {useToast} from 'bootstrap-vue-3';
import axiosInstance from "@/plugins/axios";
import {useRouter} from "vue-router";

const auth = useAuthStore();
const toast = useToast();
const router = useRouter();

const locker = {
  name: '',
  latitude: '',
  longitude: '',
  width: '',
  height: '',
  depth: '',
}

async function createLocker() {
  try {
    const res = await axiosInstance.post('lockers', locker);
    console.log(res);
    toast?.success({
      title: 'Armadietto registrato correttamente'
    })
    await router.push('lockersManagement')
  } catch (e) {
    console.log(e);
  }
}

</script>

<style scoped>

.button {
  font-family: "Adobe Caslon Pro";
  text-align: center;
  width: 80px;
  height: 40px;
  color: black;
  background-color: #E4FFEC;
}

.font {
  font-family: "Adobe Caslon Pro";
}

</style>