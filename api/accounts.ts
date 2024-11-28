import type { LoginResponse, User } from '~/interfaces'

export function getUsers() {
  return useApi<User[]>('/users')
}

export function getCurrentUser() {
  return useApi<User>('/users/me')
}

export function sendLogin(username: string, password: string) {
  const loginData = new URLSearchParams({ username, password })

  return useNuxtApp().$api<LoginResponse>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Credentials': 'none',
    },
    body: loginData.toString(),
  })
}
