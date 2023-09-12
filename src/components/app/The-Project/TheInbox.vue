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
            <ContentTask
              @changePriority="changePriority"
              @deleteTask="(val) => deleteTask(val, 'project')"
              :task="task"
            />
            <hr />
          </li>
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
      <section class="pb-5" v-for="(section, index) in listSection" :key="section.id">
        <div class="flex border-b-[1px] pb-2">
          <h2 class="font-medium pb-1">{{ section.title }}</h2>
          <button class="ml-auto hover:bg-[#f5f5f5] px-0.5 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                transform="translate(3 10)"
              >
                <circle cx="2" cy="2" r="2"></circle>
                <circle cx="9" cy="2" r="2"></circle>
                <circle cx="16" cy="2" r="2"></circle>
              </g>
            </svg>
          </button>
        </div>
        <ul>
          <li
            v-for="task in taskListInSection.length !== 0
              ? taskListInSection.filter((task) => task.section_id === section.id)
              : taskListInSection"
            :key="task.id"
            class="goal relative cursor-pointer before:content-[''] before:absolute before:-left-7 before:w-[50px] before:h-full"
          >
            <ContentTask
              @changePriority="changePriority"
              @deleteTask="(val) => deleteTask(val, 'section')"
              :task="task"
            />
            <hr />
          </li>
        </ul>
        <button
          @click="showAddForm('taskInSection', index)"
          v-if="!section.isOpenAddTask"
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
        <TheAddtaskForm
          v-else
          :idSection="section.id"
          @closeAddtaskForm="(val) => closeAddtaskForm(val, index)"
        />
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
import { useTaskStore } from '../../../stores/task.js'
import { useSectionStore } from '../../../stores/section.js'
import { ref, computed } from 'vue'
const route = useRoute()
const taskStore = useTaskStore()
const sectionStore = useSectionStore()
taskStore.getAllTaskInProject()
taskStore.getAllTaskInSection()
taskStore.getAllTask()
sectionStore.getAllSection()
const taskListInProject = computed(() => taskStore.allTaskInProject)
const taskListInSection = computed(() => taskStore.allTaskInSection)
// const allTask = computed(() => taskStore.allTask)
const listSection = computed(() => sectionStore.allSection)

// let taskListInProject = ref([])
// let taskListInSection = ref([])
// let listSection = ref([])
let project_id = ref('')
let taskInProject = ref(false)
// let taskInSection = ref(false)
project_id.value = route.params.idProject
console.log('Project_id: ', project_id.value)

const showAddForm = (refForm, index) => {
  if (refForm === 'taskInProject') taskInProject.value = true
  else if (refForm === 'taskInSection') {
    listSection.value[index].isOpenAddTask = true
    // taskInSection.value = true
  } else return
}

const closeAddtaskForm = (data, index) => {
  if (data.taskAddFrom === 'project') taskInProject.value = false
  else {
    listSection.value[index].isOpenAddTask = false
  }
}

const changePriority = (data) => {
  console.log('go here', data)
  taskStore.updateProperty(data.taskId, 'priority', data.priority, data.result)
}

const deleteTask = (data, zone) => {
  console.log('data: ', data.id)
  axios
    .delete(`https://sonnguyen48todoist.000webhostapp.com/api/deleteTask/`, {
      data: { id: data.id }
    })
    .then((res) => {
      console.log(res)
      if (zone === 'project') {
        const indexSelected = taskListInProject.value.findIndex((task) => task.id === data.id)
        taskListInProject.value.splice(indexSelected, 1)
      } else {
        const indexSelected = taskListInSection.value.findIndex((task) => task.id == data.id)
        taskListInSection.value.splice(indexSelected, 1)
      }
    })
    .catch((e) => console.log(e))
}
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
