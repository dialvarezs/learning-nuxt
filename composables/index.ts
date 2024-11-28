import type { UseFetchOptions } from '#app'

export async function useApi<T>(url: string, options?: UseFetchOptions<T>) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  })
}
