<template>
  <div class="login">

    <h2 class="mt-5 text-center"> Login </h2>

    <b-form>

      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
      >
        <b-form-input
            @keydown.enter="login"
            id="email"
            v-model="user.email"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="password"
          label="Password:"
          label-for="input-2"
          description="Password"
      >
        <b-form-input
            @keydown.enter="login"
            id="input-1"
            v-model="user.password"
            type="password"
            placeholder="Enter password"
            required
        ></b-form-input>
      </b-form-group>


      <div class="text-center">
        <b-button class="text-center" @click="login">Login</b-button>
      </div>

    </b-form>

    <div class="m-5 text-center">
      Non sei ancora registrato?
      <RouterLink to="/register"> Registrati</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";
import {BButton, BForm, BFormInput} from "bootstrap-vue-3";

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