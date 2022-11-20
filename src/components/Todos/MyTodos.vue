<template>
  <div class="mt-4">
    <h3 class="py-2">My Todos</h3>
    <div class="container">
      <div class="row gx-5 gy-5">
        <div class="col" v-for="todo in myTodos" :key="todo">
          <todo-card :title="todo.title" :status="todo.status" />
        </div>
      </div>
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

<style></style>
