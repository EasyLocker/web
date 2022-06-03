<template>
  <ViewLayout title="Tutti i lockers" background="../../immagini/bkgr_blu.jpg">
    <LockerSearchLayout list-btn-text="Book">
      <template #default="{lockers}">
        <LockerButton
            v-for="locker in lockers"
            v-bind:key="locker.id"
            :name="locker.name"
            :locker-id="locker.id"
            :button-text="locker.bookedByMe ? 'Unbook' : 'Book'"
            :disabled="locker.bookedByOthers"
            @click="locker.bookedByMe ? cancelBookingLocker(locker.id, locker.name) : bookLocker(locker.id, locker.name)"
        />
      </template>
    </LockerSearchLayout>
  </ViewLayout>
</template>

<script lang="ts" setup>
import ViewLayout from "@/components/ViewLayout.vue";
import {useAuthStore} from "@/stores/auth";
import axiosInstance from "@/plugins/axios";
import LockerSearchLayout from "@/components/LockerSearchLayout.vue";
import LockerButton from "@/components/LockerButton.vue";


async function cancelBookingLocker(lockerId: string, lockerName: string) {

  try {
    await axiosInstance.patch('/lockers/cancel', {
      id: lockerId,
      bookedByMe: false,
      bookedByOthers: false
    })
  } catch (err) {
    console.log(err);
    alert("Qualcosa è andato storto");
    return;
  }

  alert("Prenotazione locker " + lockerName + " annullata.");
}
async function bookLocker(lockerId: string, lockerName: string) {
  const auth = useAuthStore();

  try {
    await axiosInstance.patch('/lockers/book', {
      id: lockerId,
      userId: auth.id,
      bookedByMe: true,
      bookedByOthers: true
    })
  } catch (err) {
    console.log(err);
    alert("Qualcosa è andato storto");
    return;
  }

  alert("Locker " + lockerName + " prenotato!");
}

</script>

<style scoped>
</style>
