import { TodoItem } from "~/interfaces";

export function getItems() {
  return useApiFetch<TodoItem[]>('/todo-items')
}