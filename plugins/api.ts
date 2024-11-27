import { camelCase, snakeCase } from 'change-case/keys'

const API_BASE_URL = import.meta.env.API_BASEURL || 'http://127.0.0.1:8000'

export default defineNuxtPlugin((_nuxtApp) => {
  const api = $fetch.create({
    baseURL: API_BASE_URL,
    onRequest({ options }) {
      if (typeof options.body === 'object') {
        options.body = JSON.stringify(snakeCase(options.body))
      }
    },
    onResponse({ response }) {
      if (response._data) {
        response._data = camelCase(response._data, 10)
      }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
