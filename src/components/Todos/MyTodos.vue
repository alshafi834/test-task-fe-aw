<template>
  <div class="mt-4">
    <h3 class="py-2">My Todos</h3>
    <div class="container">
      <div class="row gx-5 gy-5">
        <div class="col" v-for="todo in myTodos.slice(0, 8)" :key="todo">
          <todo-card :todo="todo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, defineComponent } from "vue";
import { useStore } from "vuex";
import { FETCH_TODOS } from "../../store/constants";
import { key } from "../../store";
import { Todo } from "../../api/types";
import TodoCard from "./TodoCard.vue";
export default defineComponent({
  name: "MyTodos",
  components: { TodoCard },
  setup() {
    const store = useStore(key);
    const myTodos = computed((): Todo[] => store.state.todos);

    const fetchTodos = () => {
      store.dispatch(FETCH_TODOS);
    };

    onMounted(fetchTodos);

    return { myTodos };
  },
});
</script>

<style></style>
