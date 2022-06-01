<template>
<div>
  <h2>Crea Armadietti</h2>

  <b-form>
    <div class="mb-2">
      <span>Nome</span>
      <b-form-input required v-model="locker.name" />
    </div>

    <div class="mb-2">
      <span>Latitudine</span>
      <b-form-input v-model="locker.latitude" />
    </div>

    <div class="mb-2">
      <span>Longitudine</span>
      <b-form-input v-model="locker.longitude" />
    </div>

    <div class="mb-2">
      <span>Larghezza</span>
      <b-form-input v-model="locker.width" />
    </div>

    <div class="mb-2">
      <span>Altezza</span>
      <b-form-input v-model="locker.height" />
    </div>

    <div class="mb-2">
      <span>Profondità</span>
      <b-form-input v-model="locker.depth" />
    </div>

    <b-button class="float-end" @click.prevent="createLocker">CREA</b-button>
  </b-form>


</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {BButton, BForm, BFormInput} from "bootstrap-vue-3";
import {useAuthStore} from "@/stores/auth";
import {ref} from "vue";

export default defineComponent({
  name: "CreateLockerView",
  components: {BButton, BFormInput, BForm},
  setup() {
    // eslint-disable-next-line no-undef
    const auth = useAuthStore();
    return {
      auth,
      locker: ref({
        name: '',
        latitude: '',
        longitude: '',
        width: '',
        height: '',
        depth: '',
      }),
    };
  },
  methods: {
    async createLocker() {

    }
  }
})

</script>

<style scoped>

</style>