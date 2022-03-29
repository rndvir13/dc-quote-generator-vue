<script setup lang="ts">

import { execute, isFetching, quote } from '~/entites/randomQuote'

execute()

</script>

<template>
  <Container>
    <div class="space-y-27.25 py-27.25">
      <template v-if="isFetching || !quote">
        <Loader />
      </template>
      <template v-else>
        <Quote>{{ quote.quoteText }}</Quote>
        <router-link
          :to="{ name: 'author-name', params: { name: quote.quoteAuthor } }"
          class="flex items-center justify-between group block hover:bg-#333333 py-12.5 px-7.5"
        >
          <div>
            <div
              class="text-#4f4f4f group-hover:text-#f2f2f2 text-6 font-bold"
            >
              {{ quote.quoteAuthor }}
            </div>
            <div class="text-#828282 text-3.5">
              {{ quote.quoteGenre }}
            </div>
          </div>
          <div class="i-ic:round-arrow-right-alt text-white hidden group-hover:block text-6.25" />
        </router-link>
      </template>
    </div>
  </Container>
</template>
