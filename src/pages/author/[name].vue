<script setup lang="ts">

import { author, execute, isFetching, quotes } from '~/entites/authorQuotes'

const props = defineProps<{
  name: string
}>()

watchEffect(() => {
  author.value = props.name

  execute()
})

</script>

<template>
  <Container>
    <h1 class="text-#333 font-bold text-9 px-7.5">
      {{ props.name }}
    </h1>
    <div class="space-y-35 py-35">
      <template v-if="isFetching">
        <Loader />
      </template>
      <template v-else>
        <Quote v-for="quote in quotes" :key="quote._id">
          {{ quote.quoteText }}
        </Quote>
      </template>
    </div>
  </Container>
</template>
