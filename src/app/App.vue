<script setup lang="ts">

import { execute } from '~/entites/randomQuote'

const handle = () => {
  execute()
}

</script>

<template>
  <div class="min-h-full max-w-294 mx-auto">
    <div class="flex py-7.75 px-8">
      <router-link to="/" class="ml-auto flex items-center text-4.5 font-medium gap-2" href="#" @click="handle">
        <span>random</span>
        <div class="i-ic:round-loop text-5.5" />
      </router-link>
    </div>
    <router-view />
    <p class="text-3.5 text-center text-#828282 px-6 py-6">
      created by <a class="hover:underline hover:text-#333333" href="#">rndvir13</a> - <a class="hover:underline hover:text-#333333" href="#">devChallenges.io</a>
    </p>
  </div>
</template>
