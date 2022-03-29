import { useFetchAuthorQuote } from '~/shared/api'

const author = ref('')
const limit = ref(3)
const page = ref(1)
const query = computed(() => `?author=${author.value}&limit=${limit.value}&page=${page.value}`)

const { data, isFetching, execute } = useFetchAuthorQuote(query).get().json()

const quotes = computed(() => {
  return data.value?.data
})

export {
  isFetching,
  quotes,
  execute,
  author,
}
