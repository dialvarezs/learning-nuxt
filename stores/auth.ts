import { defineStore } from 'pinia'
import type { LoginData, Token, User } from '~/interfaces'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<Token | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  function authenticate(loginData: LoginData) {

  }

  function setUser(newUser: User) {
    user.value = newUser
  }

  function logout() {
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    isAuthenticated,
    setUser,
    logout,
  }
})
