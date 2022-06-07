<template>
<ViewLayout title="Gestione armadietti" background="../../immagini/bkge_verde.jpg" :buttons="buttons">
  <locker-search-layout show-all>
    <template #default="{lockers, reload}">
      <LockerButton
          v-for="locker in lockers"
          v-bind:key="locker.id"
          :locker-id="locker.id"
          :name="locker.name"
      >
        <template v-slot:buttons>
          <b-button variant="warning" pill class="me-2">
            <font-awesome-icon icon="pen-to-square" @click="editLocker(locker.id)"/>
          </b-button>
          <b-button variant="danger" pill @click="deleteLocker(locker, reload)">
            <font-awesome-icon icon="trash"/>
          </b-button>
        </template>
      </LockerButton>
    </template>
  </locker-search-layout>
</ViewLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {BButton} from "bootstrap-vue-3";
import axiosInstance from "@/plugins/axios";
import ViewLayout from "@/components/ViewLayout.vue";
import LockerButton from "@/components/LockerButton.vue";
import type Locker from "@/models/Locker";
import LockerSearchLayout from "@/components/LockerSearchLayout.vue";


// Color to use in this page for buttons: #91FCAC

export default defineComponent({
  name: "LockersManagementView",
  components: {LockerSearchLayout, BButton, LockerButton, ViewLayout},

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
  methods: {
    editLocker(lockerId: string) {
      this.$router.push({
        name: 'editLocker',
        params: {
          id: lockerId
        }
      })
    },
    async deleteLocker(locker: Locker, reload: () => void) {
      try {
        if (!confirm(`Sei sicuro di voler cancellare l'armadietto "${locker.name}"?`)) return;
        await axiosInstance.delete('/lockers/'+ locker.id);
        reload();
      } catch (err) {
      }
    }
  }
})

</script>

<style scoped lang="scss">

</style>
