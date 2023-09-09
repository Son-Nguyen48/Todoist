import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const allTask = ref([])
  const allTaskInProject = ref([])
  const allTaskInSection = ref([])
  function getAllTask() {
    axios
      .get('http://localhost:3000/api/getAllTask/')
      .then((response) => {
        allTask.value = response.data.taskList
      })
      .catch((error) => {
        console.error(error)
      })
  }
  function getAllTaskInProject() {
    axios
      .get('http://localhost:3000/api/getAllTaskInProject/')
      .then((response) => {
        allTaskInProject.value = response.data.taskList
      })
      .catch((error) => {
        console.error(error)
      })
  }
  function getAllTaskInSection() {
    axios
      .get('http://localhost:3000/api/getAllTaskInSection/')
      .then((res) => {
        allTaskInSection.value = res.data.taskList
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return {
    allTask,
    allTaskInProject,
    allTaskInSection,
    getAllTask,
    getAllTaskInProject,
    getAllTaskInSection
  }
})
