<template>
  <ViewLayout title="Le tue prenotazioni" :buttons="buttons" background="/images/bkgr_rosa.jpg">
    <template v-slot:subtitle>
      <div>
        <h3>
          Ciao, {{ auth.name }}
        </h3>
      </div>
    </template>

    <p class="text-black-50" v-if="!state.bookedLockers?.length">Nessun locker prenotato</p>
    <LockerButton
        v-else
        v-for="locker in state.bookedLockers"
        v-bind:key="locker.id"
        :name="locker.name"
        :locker-id="locker.id"
        button-text="Cancella prenotazione"
        @click="cancelBookingLocker(locker.id, locker.name)"
        :date="locker.bookedAt"
        background="#F28C9A"
    />
  </ViewLayout>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import ViewLayout from "@/components/ViewLayout.vue";
import LockerButton from "@/components/LockerButton.vue";
import {onMounted, reactive} from "vue";
import type BookedLocker from "@/models/BookedLocker";
import axiosInstance from "@/plugins/axios";
import {useToast} from "bootstrap-vue-3";
import {useRouter} from "vue-router";


const auth = useAuthStore();
const toast = useToast();
const router = useRouter();
let state = reactive<{bookedLockers?: BookedLocker[]}>({});

const buttons = [
  {
    text: 'Prenota',
    action: () => {
      router.push('/lockers');
    }
  }
];


onMounted(() => {
  loadBookedLockers();
})


async function loadBookedLockers() {
  const response = await axiosInstance.get('/lockers/booked')
  state.bookedLockers = response.data;
}

async function cancelBookingLocker(lockerId: string, lockerName: string) {
  try {
    await axiosInstance.patch('/lockers/cancel', {
      id: lockerId
    })
  } catch (err) {
  }

  toast?.warning({
    title: "Prenotazione locker " + lockerName + " annullata."
  })

  await loadBookedLockers();
}

</script>

<style scoped>
</style>



