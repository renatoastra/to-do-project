<!-- //eslint-disable -->
<template>
  <div class="task">
    <input
      type="checkbox"
      @change="updateCheck(completedTask)"
      class="test"
      v-model="completedTask.completed"
    />
    <span :class="[task.completed ? 'completed' : 'notCompleted', 'taskText']">
      {{ task.name }}
    </span>
    <button @click="removeTask()" class="trashcan">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      completedTask: this.task,
    };
  },
  methods: {
    updateCheck(a) {
      console.log(a);
      this.axios
        .put("http://127.0.0.1:8000/api/item/" + this.task.id, {
          item: this.completedTask,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$emit("taskchanged");
          }
        })
        .catch((error) => console.log(error));
    },
    removeTask() {
      if (confirm("Deseja excluir esta tarefa?")) {
        this.axios
          .delete("http://127.0.0.1:8000/api/item/" + this.task.id)
          .then((response) => {
            if (response.status == 200) {
              this.$emit("taskchanged");
            }
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>


<style scoped>
.completed {
  text-decoration: line-through;
  color: #ff8000;
}

.notCompleted {
  color: white;
}

.taskText {
  width: 100%;
  margin-left: 1.25rem;
  font-size: 1.9rem;
}

.task {
  border-radius: 3%;
  box-shadow: 0.6rem 0.2rem 0.2rem rgba(0, 0, 0, 0.303);
  display: flex;
  justify-content: center;
  align-items: center;
}

.trashcan {
  border: none;
  color: #ff8000;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
}

button {
  background: rgba(81, 29, 177, 0.733);
}
</style>