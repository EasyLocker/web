<template>

  <h2>Gestione armadietti </h2>

  <div class="align-content-center">
    <b-button href="/createLocker" >CREA</b-button>
  </div>

  <LockerButton v-for="locker in lockers" v-bind:key="locker._id" :name="locker.name"></LockerButton>




</template>

<script lang="ts">
import {defineComponent} from "vue";
import {BButton} from "bootstrap-vue-3";
import axiosInstance from "@/plugins/axios";

export default defineComponent({
  name: "LockersManagementView",
  components: {BButton},

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