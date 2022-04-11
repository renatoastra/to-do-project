<!-- //eslint-disable -->

<template>
  <div v-for="(task, index) in tasks" :key="index">
    <list-task
      :task="task"
      v-on:taskchanged="$emit('reloadlist')"
      v-on:reloadlist="getList()"
    />
  </div>
</template>

<script>
import listTask from "./ListTask.vue";

export default {
  props: ["tasks"],
  components: {
    listTask,
  },
};
</script>

<style scoped>
.task {
  background: rgb(81, 29, 177);
  padding: 2rem;
  margin-top: 0.7rem;
}
</style>