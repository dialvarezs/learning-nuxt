import type { User } from '~/interfaces'

export function getUsers() {
  return useApiFetch<User[]>('/users')
}
