<template>
  <div class="section">
    <h4>My Todos</h4>
    <div v-if="myTodos.length" class="row gx-5 gy-5">
      <div class="col" v-for="todo in myTodos" :key="todo">
        <todo-card :title="todo.title" :status="todo.status" />
      </div>
    </div>
    <div v-else>
      <p>No To do has been found!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, defineComponent } from "vue";
import { useStore } from "vuex";
import { FETCH_TODOS, TODOS_BY_ID } from "../../store/constants";
import { key } from "../../store";
import { Todo } from "../../api/types";
import TodoCard from "./TodoCard.vue";
export default defineComponent({
  name: "MyTodos",
  components: { TodoCard },
  setup() {
    const store = useStore(key);

    const myTodos = computed((): Todo[] => store.getters[TODOS_BY_ID]);

    const fetchTodos = () => {
      store.dispatch(FETCH_TODOS);
    };

    onMounted(fetchTodos);

    return { myTodos };
  },
});
</script>

<style lang="scss" scoped>
.section {
  margin-top: 35px;

  h4 {
    padding: 4px 0 18px 0;
  }
}
</style>
