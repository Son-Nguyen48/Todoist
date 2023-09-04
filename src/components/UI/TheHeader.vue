<template>
  <component :is="comps[componentName]"></component>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import TheInbox from './The-header/TheInbox.vue'
import TheToday from './The-header/TheToday.vue'
const route = useRoute()
const comps = {
  TheInbox,
  TheToday
}

const props = defineProps(['id'])
const components = [
  {
    id: 1,
    name: `/app/project/${props.id}`,
    component: 'TheInbox'
  },
  {
    id: 2,
    name: '/app/today',
    component: 'TheToday'
  }
]

let componentName = ref('')
componentName.value = components.filter(
  (component) => component.name === route.fullPath
)[0].component
</script>

<style lang="scss" scoped></style>
