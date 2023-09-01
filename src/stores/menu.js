import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const selectedMenu = ref('/')
  function changeTab(data) {
    selectedMenu.value = data
  }

  return { selectedMenu, changeTab }
})
