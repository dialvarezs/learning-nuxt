export interface loginResponse {
  accessToken: string
  tokenType: string
}

export interface Token {
  accessToken: string
  tokenType: string
}

export interface User {
  id: number
  username: string
  fullname: string
}

export interface Category {
  id: number
  name: string
}

export interface TodoItem {
  id: number
  title: string
  done: boolean
  assignedToId: number
  assignedTo: User
  categories: Category[]
}

export interface TodoItemUpdate {
  title?: string
  done?: boolean
  assignedToId?: number
  categories?: Category[]
}

export interface TodoItemCreate {
  title: string
  assignedToId: null | number
  categories: Category[]
}
