<template>
  <ViewLayout title="Crea Armadietti" background="/images/bkge_verde.jpg">
    <b-form>
      <div class="mb-2 el-font">
        <span>Nome</span>
        <b-form-input required v-model="locker.name"/>
      </div>

      <div class="mb-2 el-font">
        <span>Latitudine</span>
        <b-form-input v-model="locker.latitude" type="number"/>
      </div>

      <div class="mb-2 el-font">
        <span>Longitudine</span>
        <b-form-input v-model="locker.longitude" type="number"/>
      </div>

      <div class="mb-2 el-font">
        <span>Larghezza</span>
        <b-form-input v-model="locker.width" type="number"/>
      </div>

      <div class="mb-2 el-font">
        <span>Altezza</span>
        <b-form-input v-model="locker.height" type="number"/>
      </div>

      <div class="mb-2 el-font">
        <span>Profondità</span>
        <b-form-input v-model="locker.depth" type="number"/>
      </div>

      <b-button class="float-end button" variant="success" @click.prevent="onClick">
        {{isEditing ? 'Modifica' : 'Crea'}}
      </b-button>
    </b-form>
  </ViewLayout>
</template>

<script lang="ts" setup>
import {BButton, BForm, BFormInput} from "bootstrap-vue-3";
import {useAuthStore} from "@/stores/auth";
import {useToast} from 'bootstrap-vue-3';
import axiosInstance from "@/plugins/axios";
import {useRoute, useRouter} from "vue-router";
import {onMounted, reactive} from "vue";
import ViewLayout from "@/components/ViewLayout.vue";

const toast = useToast();
const router = useRouter();
const route = useRoute();

const isEditing = route.params.id !== undefined;
const locker = reactive({
  name: '',
  latitude: '',
  longitude: '',
  width: '',
  height: '',
  depth: '',
});


onMounted(() => {
  if (isEditing) getLockerById();
})

async function getLockerById() {
  try {
    const response = await axiosInstance.get('/lockers/' + route.params.id);
    const data = response.data[0];

    locker.name = data.name;
    locker.latitude = data.latitude;
    locker.longitude = data.longitude;
    locker.width = data.width;
    locker.height = data.height;
    locker.depth = data.depth;
  } catch (ignored) {
  }
}


function onClick() {
  if (isEditing) {
    updateLocker();
  } else {
    createLocker();
  }
}

async function createLocker() {
  try {
    const res = await axiosInstance.post('lockers', locker);
    console.log(res);
    toast?.success({
      title: 'Armadietto registrato correttamente'
    })
  } catch (e) {
    console.log(e);
  }
  await router.push('/lockersManagement')
}

function updateLocker() {
  axiosInstance.put('/lockers/' + route.params.id, locker).then(() => {
    toast?.success({
      title: 'Armadietto modificato con successo'
    });
    router.push('/lockersManagement')
  }).catch();
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

.el-font {
  font-family: "Adobe Caslon Pro";
}

</style>
