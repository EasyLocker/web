<template>
<ViewLayout title="Gestione armadietti" background="../../immagini/bkge_verde.jpg" :buttons="buttons">

  <LockerButton
      v-for="locker in lockers"
      v-bind:key="locker.id"
      :locker-id="locker.id"
      :name="locker.name"
  >
    <template v-slot:buttons>
      <b-button variant="warning" pill class="me-2">
        <font-awesome-icon icon="pen-to-square"/>
      </b-button>
      <b-button variant="danger" pill>
        <font-awesome-icon icon="trash"/>
      </b-button>
    </template>
  </LockerButton>

</ViewLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {BButton} from "bootstrap-vue-3";
import axiosInstance from "@/plugins/axios";
import ViewLayout from "@/components/ViewLayout.vue";
import LockerButton from "@/components/LockerButton.vue";
import type Locker from "@/models/Locker";

// Color to use in this page for buttons: #91FCAC

export default defineComponent({
  name: "LockersManagementView",
  components: {BButton, LockerButton, ViewLayout},

  data () {
    return {
      lockers: null as Locker[] | null,
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

</style>
