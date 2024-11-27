import type { LoginData, User } from '~/interfaces'

export function getUsers() {
  return useApi<User[]>('/users')
}

export function login(loginData: LoginData) {
  return $fetch('/auth/login', {
    method: 'POST',
    body: loginData,
  })
}
