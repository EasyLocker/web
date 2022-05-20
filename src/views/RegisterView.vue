<template>
  <div class="m-3">
    <h2>Sign up</h2>

    <b-form>
      <div class="mb-2">
        <span>Name</span>
        <b-form-input v-model="user.name" />
      </div>

      <div class="mb-2">
        <span>Surname</span>
        <b-form-input v-model="user.surname" />
      </div>

      <div class="mb-2">
        <span>Email</span>
        <b-form-input v-model="user.email" />
      </div>

      <div class="mb-2">
        <span>Conferma email</span>
        <b-form-input v-model="user.email" />
      </div>

      <div class="mb-2">
        <span>Password</span>
        <b-form-input v-model="user.password" />
      </div>

      <div class="mb-2">
        <span>Conferma password</span>
        <b-form-input v-model="user.password" />
      </div>



      <b-button class="float-end" @click.prevent="register">Sign up</b-button>
    </b-form>



  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {BButton, BForm, BFormInput} from "bootstrap-vue-3";

export default defineComponent({
  name: "RegisterView",
  components: {BButton, BFormInput, BForm},
  setup() {
    return {
      user: ref({
        name: '',
        surname: '',
        email: '',
        password: '',
      }),
      data: [1, 5, 7],
    };
  },
  methods: {
    register() {
      console.log('Sign up')
    }
  }
});
</script>

<style scoped>
.my-btn {
  width: 400px;
}
</style>
