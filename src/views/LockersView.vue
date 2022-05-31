<template>
  <ViewLayout title="Tutti i lockers" background="../../immagini/bkgr_blu.jpg">

    <b-input-group prepend="Search">
      <b-form-input v-model="data.name" @keydown.enter="getLockers"></b-form-input>
      <template #append>
        <b-button variant="primary" @click="getLockers">
          <font-awesome-icon icon="magnifying-glass" />
        </b-button>
      </template>
    </b-input-group>



    <LockerButton v-for="locker in lockers" v-bind:key="locker._id" :name="locker.name"></LockerButton>
  </ViewLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ViewLayout from "@/components/ViewLayout.vue";
import LockerButton from "@/components/LockerButton.vue";
import axiosInstance from "@/plugins/axios";
import {BButton, BFormInput, BFormTextarea, BInputGroup} from "bootstrap-vue-3";

export default defineComponent({
  components: {
    BFormTextarea,
    BButton,
    BInputGroup,
    BFormInput,
    LockerButton,
    ViewLayout
  },
  data () {
    return {
      lockers: null,
      data: {
        name: ''
      }
    }
  },
  mounted() {
    this.getLockers();
  },
  methods: {
    async getLockers () {
      try {
        const response = await axiosInstance.get('/lockers', {
          params: {
            name: this.data.name
          }
        })
        console.log(response);
        this.lockers = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
})
</script>

<style scoped>
</style>