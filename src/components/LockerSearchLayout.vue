<template>
  <div>
    <b-input-group prepend="Search">
      <b-form-input v-model="data.name" @keydown.enter="btnClick"></b-form-input>
      <template #append>
        <b-button variant="primary" @click.stop="btnClick" >
          <font-awesome-icon icon="magnifying-glass" />
        </b-button>
      </template>
    </b-input-group>

    <slot :lockers="lockers" />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import axiosInstance from "@/plugins/axios";
import {BButton, BFormInput, BInputGroup} from "bootstrap-vue-3";

export default defineComponent ({
  name: 'LockerSearchLayout',
  components: {BButton, BFormInput, BInputGroup},
  props: {
    name: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      lockers: null,
      data: {
        name: ''
      }
    }
  },
  mounted() {
    this.getLockers();
  },
  methods: {
    async getLockers() {
      try {
        const response = await axiosInstance.get('/lockers', {
          params: {
            name: this.data.name
          }
        })
        //console.log(response.data);
        this.lockers = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    btnClick () {
      this.getLockers();
      this.$emit('click', this.lockers);
    }
  }
})
</script>

<style scoped>

</style>