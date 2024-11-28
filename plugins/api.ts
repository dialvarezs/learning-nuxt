import { camelCase, snakeCase } from 'change-case/keys'

const API_BASE_URL = import.meta.env.API_BASEURL || 'http://127.0.0.1:8000'

export default defineNuxtPlugin((_nuxtApp) => {
  const authStore = useAuthStore()

  const api = $fetch.create({
    baseURL: API_BASE_URL,
    onRequest({ options }) {
      if (typeof options.body === 'object') {
        options.body = JSON.stringify(snakeCase(options.body))
      }
      // Add Authorization header if user is authenticated
      if (authStore.isAuthenticated) {
        options.headers.set('Authorization', `Bearer ${authStore.token!.accessToken}`)
      }
    },
    onResponse({ response }) {
      if (response._data) {
        response._data = camelCase(response._data, 10)
      }
    },
    onResponseError({ response }) {
      // Redirect to login page if token is invalid
      if (response.status === 401) {
        authStore.clearData()
        navigateTo('/login')
      }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
