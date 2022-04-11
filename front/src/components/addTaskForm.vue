<template>
  <div class="addTask">
    <input type="text" v-model="task.name" placeholder="Insira aqui" />
    <font-awesome-icon
      icon="square-plus"
      :class="[
        task.name && task.name.length > 3 ? 'active' : 'inactive',
        'normal',
      ]"
      @click="addTask()"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      task: {
        name: "",
      },
    };
  },
  methods: {
    addTask() {
      if (this.task.name == "" || this.task.name.length < 3) {
        alert(
          "Ops.. parece que você tentou inserir uma tarefa inválida, tente novamente"
        );
        return;
      }
      axios
        .post("http://127.0.0.1:8000/api/item/store", {
          item: this.task,
        })
        .then((response) => {
          if (response.status == 201) {
            this.task.name = "";
            this.$emit("reloadlist");
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>


<style scoped>
.addTask {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

input {
  background: #f7f7f726;
  border: 0px;
  outline: none;
  padding: 1.1rem;
  margin-right: 0.6rem;
  transition: 0.5s;

  width: 100%;
}

input:focus {
  transition: 0.5s;
  color: #ff8000;
  font-size: 0.8rem;
  font-style: bold;
  background: white;
}

.normal:hover {
  color: #fb0e02;
  box-shadow: 0.5px black;
}
.normal {
  font-size: 3rem;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.5s;
}

.active:hover {
  color: #00ce25;
  box-shadow: 0.5px black;
}
</style>