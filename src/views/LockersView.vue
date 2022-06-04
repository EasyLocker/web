<template>
  <ViewLayout title="Tutti i lockers" background="../../immagini/bkgr_blu.jpg">
    <LockerSearchLayout list-btn-text="Book">
      <template #default="{lockers, reload}">
        <h3 class="mt-4">Lockers prenotati</h3>
        <p class="text-black-50" v-if="!state.bookedLockers?.length">Nessun locker prenotato</p>
        <LockerButton
            v-else
            v-for="locker in state.bookedLockers"
            v-bind:key="locker.id"
            :name="locker.name"
            :locker-id="locker.id"
            button-text="Cancella prenotazione"
            @click="cancelBookingLocker(locker.id, locker.name, reload)"
        />
        <h3 class="mt-4">Lockers disponibili</h3>
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

let state = reactive<{bookedLockers?: []}>({});


onMounted(() => {
  loadBookedLockers();
})


async function loadBookedLockers() {
  const response = await axiosInstance.get('/lockers/booked')
  state.bookedLockers = response.data;
}

async function cancelBookingLocker(lockerId: string, lockerName: string, reload: () => void) {
  try {
    await axiosInstance.patch('/lockers/cancel', {
      id: lockerId
    })
  } catch (err) {
  }

  // TODO: Change alert in toast
  // alert("Prenotazione locker " + lockerName + " annullata.");

  setTimeout(() => {
    loadBookedLockers();
    reload();
  }, 100);
}

async function bookLocker(lockerId: string, lockerName: string, reload: () => void) {
  try {
    await axiosInstance.patch('/lockers/book', {
      id: lockerId
    })
  } catch (err) {
  }

  // TODO: Change alert in toast
  // alert("Locker " + lockerName + " prenotato!");

  setTimeout(() => {
    loadBookedLockers();
    reload();
  }, 100);
}

</script>

<style scoped>
</style>
