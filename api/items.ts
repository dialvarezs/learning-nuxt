import type { TodoItem } from '~/interfaces'

export async function getItems() {
  return useApiFetch<TodoItem[]>('/todo-items')
}
