<template>
  <div :class="[theme ? 'light' : 'dark']">
    <nav class="nav">
      <button @click="changeTheme" class="btn btn-info">
        {{ theme ? "Switch to Dark mode" : "Swithc to Light mode" }}
      </button>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";
import { key } from "./store";
import { TOOGLE_THEME_ACTION } from "./store/constants";

export default defineComponent({
  name: "MyTodos",
  setup() {
    const store = useStore(key);
    const theme = computed(() => store.state.darkTheme);
    const changeTheme = () => {
      store.dispatch(TOOGLE_THEME_ACTION);
    };

    return { changeTheme, theme };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.dark {
  background: rgb(44, 44, 44);
  height: 100vh;
  color: rgb(240, 240, 240);
}
.light {
  background: white;
  height: 100vh;
  color: rgb(24, 23, 23);
}
.nav {
  display: flex;
  justify-content: flex-end;
  padding: 8px 8px 0 0;
}
</style>
