<template>
  <ViewLayout title="Armadietti disponibili" background="/images/bkgr_blu.jpg">
    <LockerSearchLayout list-btn-text="Book">
      <template #default="{lockers, reload}">
        <p class="text-black-50" v-if="!lockers?.length">Nessun locker disponibile</p>
        <LockerButton
            v-else
            v-for="locker in lockers"
            v-bind:key="locker.id"
            :name="locker.name"
            :locker-id="locker.id"
            button-text="Book"
            :disabled="locker.notAvailable"
            @click="bookLocker(locker.id, locker.name, reload)"
            background="#87CEFA"
        />
      </template>
    </LockerSearchLayout>
  </ViewLayout>
</template>

<script lang="ts" setup>
import ViewLayout from "@/components/ViewLayout.vue";
import axiosInstance from "@/plugins/axios";
import LockerSearchLayout from "@/components/LockerSearchLayout.vue";
import LockerButton from "@/components/LockerButton.vue";
import {onMounted, reactive} from "vue";
import type BookedLocker from "@/models/BookedLocker";
import {useToast} from "bootstrap-vue-3";

const toast = useToast();



async function bookLocker(lockerId: string, lockerName: string, reload: () => void) {
  try {
    await axiosInstance.patch('/lockers/book', {
      id: lockerId
    })
    reload();
  } catch (err) {
  }

  toast?.success({
    title: "Locker " + lockerName + " prenotato!"
  })
}

</script>

<style scoped>
</style>
