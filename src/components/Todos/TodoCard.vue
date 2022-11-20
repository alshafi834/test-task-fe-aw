<template>
  <div class="card" style="width: 15rem; height: 170px">
    <div class="card-body d-flex flex-row justify-content-around">
      <input
        style="width: 25px; height: 25px"
        v-model="todoChecked"
        type="checkbox"
      />
      <h5 class="card-title">{{ todoTitle?.substr(0, 20) }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "TodoCard",
  props: {
    title: String,
    status: String,
  },
  setup(props) {
    const todoChecked = computed(() => props.status === "completed");
    const todoTitle = computed(() => props.title);

    return { todoChecked, todoTitle };
  },
});
</script>

<style></style>
