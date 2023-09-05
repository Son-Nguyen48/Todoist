<template>
  <component :is="comps[componentName]"></component>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TheInbox from './The-header/TheInbox.vue'
import TheToday from './The-header/TheToday.vue'
const route = useRoute()
const comps = {
  TheInbox,
  TheToday
}

const props = defineProps(['idProject', 'idTask'])
const components = [
  {
    id: 1,
    name: `/app/project/${props.idProject}`,
    component: 'TheInbox'
  },
  {
    id: 2,
    name: '/app/today',
    component: 'TheToday'
  },
  {
    id: 3,
    name: `/app/project/${props.idProject}/task/${props.idTask}`,
    component: 'TheToday'
  }
]
console.log(
  'here: ',
  route.params.idProject,
  route.params.idTask,
  route.fullPath,
  components[2].name
)

let componentName = ref('')
componentName.value = components.filter(
  (component) => component.name === route.fullPath
)[0].component
</script>

<style lang="scss" scoped></style>
