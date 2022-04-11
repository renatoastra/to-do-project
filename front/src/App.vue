<template>
  <div class="container">
    <div class="mainContainer">
      <div class="heading">
        <h2 id="title">Daily Quests</h2>
        <add-task-form v-on:reloadlist="getList()" />
      </div>
      <list-view :tasks="tasks" v-on:reloadlist="getList()" />
    </div>
  </div>
</template>

<script>
import addTaskForm from "./components/addTaskForm.vue";
import listView from "./components/listView.vue";
import axios from "axios";
export default {
  components: {
    addTaskForm,
    listView,
  },
  data: function () {
    return {
      tasks: [],
    };
  },
  methods: {
    getList() {
      axios
        .get("http://127.0.0.1:8000/api/items")
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style scoped>
.mainContainer {
  width: 41.5rem;
  margin: 8.25rem;
}

.heading {
  background: rgba(81, 29, 177, 0.987);
  padding: 1.8rem;
  height: 30%;

  box-shadow: 0.6rem 0.2rem 0.2rem rgba(0, 0, 0, 0.303);
}

#title {
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 0.8rem;
}
</style>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/space.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>