import type { LoginResponse, User } from '~/interfaces'

export function getUsers() {
  return useApi<User[]>('/users')
}

export function getMyUser() {
  return useApi<User>('/users/me')
}

export function sendLogin(username: string, password: string) {
  return useNuxtApp().$api<LoginResponse>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Credentials': 'none',
    },
    body: new URLSearchParams({ username, password }).toString(),
  })
}
