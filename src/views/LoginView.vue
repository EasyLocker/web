<template>
  <div class="login">

    <h2 class="mt-5 text-center"> Login </h2>

    <b-form>

      <div class="m-5">
        <span>Email</span>
        <b-form-input v-model="user.email"/>
      </div>

      <div class="m-5">
        <span>Password</span>
        <b-form-input type="password" v-model="user.password"/>
      </div>

      <div class="text-center">
        <b-button class="text-center" @click.prevent="login">Login</b-button>
      </div>

      <div class="m-5 text-center">
        Non sei ancora registrato?
        <RouterLink to="/register"> Registrati</RouterLink>
      </div>


    </b-form>

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";

const user = ref({
  email: '',
  password: '',
})

let auth = useAuthStore();

function login() {
  auth.login(user.value);
}

</script>

<style scoped>

</style>