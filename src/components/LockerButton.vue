<template>
  <div class="mx-3 mx-md-5 my-2">
    <div class="card home-button w-100">
      <div class="p-2">
        <b-button class="float-end">{{ buttonText }}</b-button>
        <div class="font-1 ms-3">{{name}}</div>
        <div class="font-2 ms-3">Via Stazione</div>
      </div>
    </div>
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-3";
import axiosInstance from "@/plugins/axios";
import {useAuthStore} from "@/stores/auth";
import {defineComponent} from "vue";


export default defineComponent({
  name: "LockerButton",
  components: {BButton},
  props: {
    name: {
      type: String,
      require: true
    },
    lockerId: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
  }
});

</script>

<style scoped>

.home-button {
  background-color: #87CEFA;
  color: black;
  border-radius: 16px;
  height: 60px;
  width: 500px;
}

.font-1{
  font-family: "Adobe Caslon Pro";
  font-size: 16px;
  text-align: left;
}

.font-2{
  font-size: 10px;
  font-family: "Adobe Caslon Pro";
  text-align: left;
}

</style>