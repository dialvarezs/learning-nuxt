import type { User } from "~/interfaces";

export async function getUsers() {
  return useApiFetch<User[]>('/users')
}