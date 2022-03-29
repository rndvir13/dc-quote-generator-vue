<template>
  <div
    class="px-7.5 text-9 font-raleway font-medium relative before:block before:absolute before:w-2 before:bg-accent before:inset-y-0 before:left--17.5 before:content-[]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Quote',
}
</script>
