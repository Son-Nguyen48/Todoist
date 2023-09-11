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

  function updateTask(id, property, value, zone) {
    if (zone === 'project')
      allTaskInProject.value.find((task) => task.id == id)[`${property}`] = value
    else {
      console.log('zone: ', zone)
      const section_id = zone.split('_')[1]
      allTaskInSection.value.find((task) => task.section_id == section_id)[`${property}`] = value
    }
  }

  return {
    allTask,
    allTaskInProject,
    allTaskInSection,
    getAllTask,
    getAllTaskInProject,
    getAllTaskInSection,
    updateTask
  }
})
