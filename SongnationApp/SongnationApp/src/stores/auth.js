import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: !!localStorage.getItem('jwt_token'),
    token: localStorage.getItem('jwt_token'),
  }),
  actions: {
    login(token) {
      this.isLoggedIn = true
      this.token = token
      localStorage.setItem('jwt_token', token)
    },
    logout() {
      this.isLoggedIn = false
      this.token = null
      localStorage.removeItem('jwt_token')
    },
  },
})
