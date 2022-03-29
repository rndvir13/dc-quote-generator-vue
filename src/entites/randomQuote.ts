import { useFetchRandomQuote } from '~/shared/api'

const { data, isFetching, execute } = useFetchRandomQuote('').get().json()

const quote = computed(() => {
  return data.value?.data[0]
})

export {
  isFetching,
  quote,
  execute,
}
