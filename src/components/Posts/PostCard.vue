<template>
  <div
    class="card h-100"
    :class="[theme ? 'lightCard' : 'darkCard']"
    style="width: 15rem"
  >
    <div class="card-body">
      <h5 class="card-title">{{ post.title.substr(0, 20) }}</h5>
      <p class="card-text">
        {{ post.body.substr(0, 100) }}
      </p>
    </div>
  </div>
</template>

<script>
import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "PostCard",
  props: {
    post: {
      userId: Number,
      id: Number,
      title: String,
      body: String,
    },
  },
  setup() {
    const store = useStore(key);
    const theme = computed(() => store.state.darkTheme);
    return {
      theme,
    };
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
</style>
