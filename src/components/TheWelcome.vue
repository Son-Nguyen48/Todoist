<template>
  <button @click="isRefOpen = true" class="px-3 py-1 border-[1px] rounded-md" ref="target">
    Button
    <p class="absolute top-1/2" v-if="isRefOpen">Hello</p>
  </button>
  <div class="px-3 py-1 border-[1px] rounded-md">Outside element</div>
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
  setup() {
    const target = ref(null)
    const isRefOpen = ref(false)

    onClickOutside(target, () => (isRefOpen.value = false))

    return { target, isRefOpen }
  }
}
</script>
