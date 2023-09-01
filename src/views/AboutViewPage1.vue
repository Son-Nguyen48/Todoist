<template>
  <table class="w-full border-[1px] mt-4 mx-auto text-center">
    <tr class="border-[1px]">
      <th class="border-[1px]">Id</th>
      <th class="border-[1px]">Title</th>
      <th class="border-[1px]">IsCompleted</th>
      <th class="border-[1px]">IsEditing</th>
      <th class="border-[1px]">IsModalOpen</th>
      <th class="border-[1px]">IdDuedate</th>
      <th class="border-[1px]">DueDate</th>
    </tr>
    <tr class="border-[1px]" v-for="todo in data['todolist']" :key="todo.id">
      <td class="border-[1px]">{{ todo.id }}</td>
      <td class="border-[1px]">{{ todo.title }}</td>
      <td class="border-[1px]">{{ todo.isCompleted }}</td>
      <td class="border-[1px]">{{ todo.isEditing }}</td>
      <td class="border-[1px]">{{ todo.isModalOpen }}</td>
      <td class="border-[1px]">{{ todo.idDuedate }}</td>
      <td class="border-[1px]">{{ todo.dueDate }}</td>
    </tr>
  </table>
</template>

<script setup>
import axios from 'axios'
import { ref, watchEffect } from 'vue'
let data = ref([])
watchEffect(() => {
  axios.get('http://localhost:3000/Backend/api/getAllTodo').then((res) => {
    data.value = res.data
    console.log('data', data.value)
  })
})
</script>

<style lang="scss" scoped></style>
