import type { LoginResponse, Token, User } from '~/interfaces'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<Token | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  function setToken(tokenData: LoginResponse) {
    token.value = {
      accessToken: tokenData.accessToken,
      tokenType: tokenData.tokenType,
    }
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
    setToken,
    setUser,
    logout,
  }
})
