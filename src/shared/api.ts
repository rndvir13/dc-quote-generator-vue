import { createFetch } from '@vueuse/core'

export const HOST = 'https://quote-garden.herokuapp.com/api/v3'

export const URL_RANDOM = `${HOST}/quotes/random`
export const URL_AUTHOR = `${HOST}/quotes`

export const useFetchRandomQuote = createFetch({
  baseUrl: URL_RANDOM,
  options: {
    immediate: false,
  },
})
export const useFetchAuthorQuote = createFetch({
  baseUrl: URL_AUTHOR,
  options: {
    immediate: false,
  },
})

// export const useFetchAuthorQuote = (author) => {
//   const { data } = useFetch(`${URL_AUTHOR}?author=${author}&page=1&limit=3`, { immediate: false }).get().json()

//   const quotes = computed(() => {
//     return data.value?.data || []
//   })

//   return {
//     quotes,
//   }
// }
