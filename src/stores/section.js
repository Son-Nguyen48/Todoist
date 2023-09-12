import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useSectionStore = defineStore('section', () => {
  const allSection = ref([])
  function getAllSection() {
    axios.get('https://sonnguyen48todoist.000webhostapp.com/api/getAllSection/').then((res) => {
      allSection.value = [...res.data.sectionList].map((i) => ({ ...i, isOpenAddTask: false }))
    })
  }

  return {
    allSection,
    getAllSection
  }
})
