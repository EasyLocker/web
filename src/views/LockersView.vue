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
            @click="locker.bookedByMe ? unbookLocker(locker.id) : bookLocker(locker.id)"
        />
      </template>
    </LockerSearchLayout>
  </ViewLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ViewLayout from "@/components/ViewLayout.vue";
import LockerList from "@/components/LockerSearchLayout.vue";
import {useAuthStore} from "@/stores/auth";
import axiosInstance from "@/plugins/axios";
import LockerSearchLayout from "@/components/LockerSearchLayout.vue";

export default defineComponent({
  components: {
    LockerSearchLayout,
    ViewLayout
  },
  methods: {
    async unbookLocker(lockerId) {
      console.log('Hey, unbooko locker! ' + lockerId)
      //const auth = useAuthStore();

      try {
        await axiosInstance.patch('/lockers/unbook', {
          id: lockerId
        })
      } catch (err) {
        console.log(err);
      }
    },
    async bookLocker(lockerId) {
      console.log('Hey, booko locker! ' + lockerId)
      const auth = useAuthStore();

      try {
        await axiosInstance.patch('/lockers/book', {
          id: lockerId,
          userId: auth.id
        })
      } catch (err) {
        console.log(err);
      }
    }
  }
})
</script>

<style scoped>
</style>