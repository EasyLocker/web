import { defineStore } from 'pinia'
import axios from "../plugins/axios";

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
        this.id = data.id;
        this.token = data.token;
        this.email = data.email;
        this.role = data.role;
      } catch (err) {
      }
    },
    logout() {
      this.id = '';
      this.token = '';
      this.email = '';
      this.role = '';
    },
  }
})
