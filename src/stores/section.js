import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useSectionStore = defineStore('section', () => {
  const allSection = ref([])
  function getAllSection() {
    axios.get('http://localhost:3000/api/getAllSection/').then((res) => {
      allSection.value = [...res.data.sectionList].map((i) => ({ ...i, isOpenAddTask: false }))
    })
  }

  return {
    allSection,
    getAllSection
  }
})
