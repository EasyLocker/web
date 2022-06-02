<template>
<ViewLayout title="Gestione armadietti" background="../../immagini/bkge_verde.jpg" :buttons="['Crea']">
<!--  <h2 class="font mx-4"></h2>-->

<!--  <div class="text-center">-->
<!--    <b-button href="/createLocker" class="button" >Crea</b-button>-->
<!--  </div>-->

  <LockerButton v-for="locker in lockers" v-bind:key="locker._id" :name="locker.name"></LockerButton>


</ViewLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {BButton} from "bootstrap-vue-3";
import axiosInstance from "@/plugins/axios";
import ViewLayout from "@/components/ViewLayout.vue";

export default defineComponent({
  name: "LockersManagementView",
  components: {ViewLayout, BButton},

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

<style scoped lang="scss">

.button{
  color: black;
  background-color: #91FCAC;
  @extend .font;
}

.font{
  font-family: "Adobe Caslon Pro";
}

</style>