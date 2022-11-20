<template>
  <div
    class="card cards"
    :class="[theme ? 'lightCard' : 'darkCard']"
    style="width: 15rem; height: 170px"
  >
    <div class="card-body card-layout">
      <input
        style="width: 25px; height: 25px"
        v-model="todoChecked"
        type="checkbox"
      />
      <h6 class="card-title">{{ todoTitle?.substr(0, 20) }}</h6>
    </div>
  </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "TodoCard",
  props: {
    title: String,
    status: String,
  },
  setup(props) {
    const todoChecked = computed(() => props.status === "completed");
    const todoTitle = computed(() => props.title);

    const store = useStore(key);
    const theme = computed(() => store.state.darkTheme);

    return { todoChecked, todoTitle, theme };
  },
});
</script>

<style lang="scss" scoped>
.lightCard {
  box-shadow: $shadow1;
}
.darkCard {
  box-shadow: $shadow1;
  background: rgb(61 61 61);
}
.card-layout {
  display: flex;
  align-content: center;
  input {
    margin-right: 5px;
    cursor: pointer;
  }
  h6 {
    margin-top: 3px;
  }
}
</style>
