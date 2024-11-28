import { StorageSerializers } from '@vueuse/core'
import type { LoginResponse, Token, User } from '~/interfaces'

export const useAuthStore = defineStore('auth', () => {
  const user: Ref<User | null> = useLocalStorage('user', null, { serializer: StorageSerializers.object })
  const token: Ref<Token | null> = useLocalStorage('token', null, { serializer: StorageSerializers.object })

  const isAuthenticated = computed(() => !!token.value)

  function setToken(tokenData: LoginResponse) {
    token.value = {
      accessToken: tokenData.accessToken,
      tokenType: tokenData.tokenType,
    }
  }

  function setUser(newUser: User) {
    user.value = {
      id: newUser.id,
      username: newUser.username,
      fullname: newUser.fullname,
    }
  }

  function clearData() {
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    isAuthenticated,
    setToken,
    setUser,
    clearData,
  }
})
