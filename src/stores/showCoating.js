import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShowCoatingStore = defineStore('showCoating', () => {
  const open = ref(false)
  const doubleCount = computed(() => open.value * 2)
  function setOpen() {
    open.value = !open.value
    console.log(open.value)
  }

  return { open, doubleCount, setOpen }
})
