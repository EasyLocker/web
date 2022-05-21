<template>
  <div class="signin">

    <h2 class="reg-font mt-5 text-center"> Sign In</h2>

    <b-form>

      <div class="reg-font m-5">
        <span>Email</span>
        <b-form-input v-model="user.email" />
      </div>

      <div class="reg-font m-5">
        <span>Password</span>
        <b-form-input v-model="user.password" />
      </div>

      <div class="reg-font m-5">
        <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="rememberme"
            value="accepted"
            unchecked-value="not_accepted"

        >
          Remember me
        </b-form-checkbox>
      </div>

      <b-button class="reg-font float-end m-5" @click.prevent="signin">Sign in</b-button>

    </b-form>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({

  name: "SignInView.vue",

  setup() {
    return {
      user: ref({
        email: '',
        password: '',
      }),
      data: [1, 5, 7],
    };
  },

  methods: {
    signin() {
      console.log('Sign in')
    }
  },

  data() {
    return {
      status: 'not_accepted'
    }
  }

});


</script>

<style scoped>

</style>