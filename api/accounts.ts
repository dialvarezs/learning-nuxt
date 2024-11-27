import type { loginResponse, User } from '~/interfaces'

export function getUsers() {
  return useApi<User[]>('/users')
}

export function sendLogin(username: string, password: string) {
  return useApi<loginResponse>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ username, password }).toString(),
    immediate: false,
    watch: false,
  })
}
