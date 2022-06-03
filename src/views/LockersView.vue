<template>
  <ViewLayout title="Tutti i lockers" background="../../immagini/bkgr_blu.jpg">
    <LockerSearchLayout list-btn-text="Book">
      <template #default="{lockers}">
        <LockerButton
            v-for="locker in lockers"
            v-bind:key="locker._id"
            :name="locker.name"
            :locker-id="locker._id"
            :button-text="locker.bookedByMe ? 'Unbook' : 'Book'"
            :disabled="locker.bookedByMe"
            @click="locker.bookedByMe ? cancelBookingLocker(locker.id) : bookLocker(locker.id) "
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


async function cancelBookingLocker(lockerId: string) {
  console.log('Hey, free locker! ' + lockerId);

  try {
    await axiosInstance.patch('/lockers/cancel', {
      id: lockerId,
      bookedByMe: false,
    })
  } catch (err) {
    console.log(err);
  }
}
async function bookLocker(lockerId: string) {
  console.log('Hey, booko locker! ' + lockerId)
  const auth = useAuthStore();

  try {
    await axiosInstance.patch('/lockers/book', {
      id: lockerId,
      userId: auth.id,
      bookedByMe: true
    })
  } catch (err) {
    console.log(err);
  }
}

</script>

<style scoped>
</style>