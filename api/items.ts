import type { TodoItem, TodoItemCreate } from '~/interfaces'

export function getItems() {
  return useApiFetch<TodoItem[]>('/todo-items')
}

export function createItem(item: TodoItemCreate) {
  return useApiFetch<TodoItem>('/todo-items', {
    method: 'POST',
    immediate: false,
    watch: false,
    body: item,
  })
}
