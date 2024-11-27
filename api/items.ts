import type { TodoItem, TodoItemCreate, TodoItemUpdate } from '~/interfaces'

export function getItems() {
  return useApi<TodoItem[]>('/todo-items')
}

export function createItem(item: TodoItemCreate) {
  return useApi<TodoItem>('/todo-items', {
    method: 'POST',
    immediate: false,
    watch: false,
    body: item,
  })
}

export function updateItem(id: number, itemData: TodoItemUpdate) {
  return useApi<TodoItem>(`/todo-items/${id}`, {
    method: 'PATCH',
    immediate: false,
    watch: false,
    body: itemData,
  })
}
