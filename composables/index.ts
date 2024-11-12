import { camelCase, snakeCase } from 'change-case/keys'

const API_BASE_URL = 'http://127.0.0.1:8000'

export async function useApiFetch<T>(url: string, options?: {}) {
  return useFetch<T>(`${API_BASE_URL}${url}`, {
    ...options,
    async onResponse({ response }) {
      if (response._data) {
        response._data = camelCase(response._data, 10)
      }
    },
    async onRequest({ options }) {
      if (typeof options.body === 'object') {
        options.body = JSON.stringify(snakeCase(options.body))
      }
    },
  })
}
