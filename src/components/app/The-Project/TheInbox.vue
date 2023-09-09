<template>
  <div class="ml-[305px] w-full relative">
    <div class="mx-[75.5px] px-[55px] pb-[72px]">
      <TheHeader :idProject="route.params.idProject" :idTask="route.params.idTask" />
      <div class="pt-20">
        <ul>
          <li
            v-for="task in taskListInProject"
            :key="task.id"
            class="goal relative cursor-pointer before:content-[''] before:absolute before:-left-7 before:w-[50px] before:h-full"
          >
            <ContentTask :task="task" />
            <hr />
          </li>
          <hr />
        </ul>
        <button
          @click="showAddForm('taskInProject')"
          v-if="!taskInProject"
          class="add_task_hover flex items-center gap-2 py-2 w-full"
        >
          <span class="add_task_btn p-[2px] rounded-full">
            <svg width="13" height="13" class="text-[#DE483A]">
              <path
                d="M6 6V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
          <span class="add_task_title text-[grey] text-[14px]">Add task</span>
        </button>
        <!-- <form v-else action="" method="POST">
          <button
            @click="isAddFormOpen = false"
            class="bg-[#f5f5f5] py-1.5 px-4 rounded-md hover:bg-[#e5e5e5]"
          >
            Cancel
          </button>
        </form> -->
        <TheAddtaskForm v-else :idProject="project_id" @closeAddtaskForm="closeAddtaskForm" />

        <AddSection />
      </div>
      <section class="pb-5" v-for="section in listSection" :key="section.id">
        <h2 class="font-medium pb-1">New Section</h2>
        <ul>
          <li
            v-for="task in taskListInSection.filter((task) => task.section_id === section.id)"
            :key="task.id"
            class="goal relative cursor-pointer before:content-[''] before:absolute before:-left-7 before:w-[50px] before:h-full"
          >
            <ContentTask :task="task" />
            <hr />
          </li>
          <hr />
        </ul>
        <button
          @click="showAddForm('taskInSection')"
          v-if="!taskInSection"
          class="add_task_hover flex items-center gap-2 py-2 w-full"
        >
          <span class="add_task_btn p-[2px] rounded-full">
            <svg width="13" height="13" class="text-[#DE483A]">
              <path
                d="M6 6V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
          <span class="add_task_title text-[grey] text-[14px]">Add task</span>
        </button>
        <TheAddtaskForm v-else :idSection="section.id" @closeAddtaskForm="closeAddtaskForm" />
        <AddSection />
      </section>

      <RouterView />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
// import { computed } from 'vue'
import AddSection from '../../UI/The-button/AddSection.vue'
import TheAddtaskForm from '../../UI/Form-addTask/TheAddtaskForm.vue'
import TheHeader from '../../UI/TheHeader.vue'
import ContentTask from '../../UI/Content-task/ContentTask.vue'
import { useRoute, RouterView } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()

let taskListInProject = ref([])
let taskListInSection = ref([])
let listSection = ref([])
let project_id = ref('')
let taskInProject = ref(false)
let taskInSection = ref(false)
project_id.value = route.params.idProject
console.log('Project_id: ', project_id.value)

const showAddForm = (refForm) => {
  if (refForm === 'taskInProject') taskInProject.value = true
  else if (refForm === 'taskInSection') taskInSection.value = true
  else return
}

const closeAddtaskForm = (data) => {
  console.log('data: ', data)
  if (data.taskAddFrom === 'project') taskInProject.value = false
  else taskInSection.value = false
}
// http://localhost:3000/
axios
  .get('http://localhost:3000/api/getAllTaskInProject/')
  .then((response) => {
    taskListInProject.value = response.data.taskList
  })
  .catch((error) => {
    console.error(error)
  })

axios.get('http://localhost:3000/api/getAllTaskInSection/').then((res) => {
  taskListInSection.value = res.data.taskList
})

axios.get('http://localhost:3000/api/getAllSection/').then((res) => {
  listSection.value = res.data.sectionList
})
</script>

<style scoped>
button.add_task_hover:hover .add_task_btn {
  background: #de483a;
}
button.add_task_hover:hover .add_task_btn svg {
  color: white;
}
button.add_task_hover:hover .add_task_title {
  color: #de483a;
}
</style>
