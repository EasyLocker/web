import { defineStore } from 'pinia'
import axios, {updateHeaders} from "../plugins/axios";
import axiosInstance from "../plugins/axios";
import router from "@/router";

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    id: '',
    token: '',
    email: '',
    role: ''
  }),
  getters: {
    isLogged: (state) => {
      return state.token !== null
    },
    isAdmin: (state) => {
      return state.role === 'admin'
    }
  },
  actions: {
    async login(authData: { email: string, password: string }) {
      try {
        const { data } = await axios.post('authenticate', authData);
        await this.completeAuthentication(data);
      } catch (err) {
      }
    },
    async registerUser(user: {name: string, surname: string, email: string, password: string}) {
      try {
        const { data } = await axiosInstance.post('users/register', user);
        await this.completeAuthentication(data);
      } catch (err) {
      }
    },
    async completeAuthentication(data: {id: string, token: string, email: string, role: string}) {
      this.id = data.id;
      this.token = data.token;
      this.email = data.email;
      this.role = data.role;

      updateHeaders(this.token);
      await router.push('/');
    },
    logout() {
      this.id = '';
      this.token = '';
      this.email = '';
      this.role = '';
    },
  }
})