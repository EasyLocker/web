<template>
<ViewLayout title="Gestione armadietti" background="../../immagini/bkge_verde.jpg" :buttons="buttons">
<!--  <h2 class="font mx-4"></h2>-->

  <div class="text-center">
    <b-button class="button" >Crea (old)</b-button>
  </div>

  <LockerButton v-for="locker in lockers" v-bind:key="locker.id" :locker-id="locker.id" :name="locker.name"></LockerButton>


</ViewLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {BButton} from "bootstrap-vue-3";
import axiosInstance from "@/plugins/axios";
import ViewLayout from "@/components/ViewLayout.vue";
import LockerButton from "@/components/LockerButton.vue";

export default defineComponent({
  name: "LockersManagementView",
  components: {LockerButton, ViewLayout, BButton},

  data () {
    return {
      lockers: null,
      data: {
        name: ''
      },
      buttons: [
        {
          text: 'Crea',
          action: () => {
            this.$router.push('/createLocker');
          }
        }
      ]
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
        this.lockers = response.data;
      } catch (err) {
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
