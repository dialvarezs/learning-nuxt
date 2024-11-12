import type { TodoItem, TodoItemCreate } from '~/interfaces'

export async function getItems() {
  return useApiFetch<TodoItem[]>('/todo-items')
}

export async function createItem(item: TodoItemCreate) {
  return useApiFetchPost<TodoItem>('/todo-items', {
    method: 'POST',
    body: item
  })
}