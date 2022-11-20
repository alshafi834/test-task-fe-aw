<template>
  <div class="mt-4">
    <h3 class="py-2">Latest Posts</h3>

    <div class="container">
      <div class="row gx-5 gy-5">
        <div class="col" v-for="post in latestPosts" :key="post">
          <post-card :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { FETCH_POSTS, LATEST_POSTS } from "../../store/constants";
import { key } from "../../store";
import { Post } from "../../api/types";
import PostCard from "./PostCard.vue";

export default defineComponent({
  name: "LatestPosts",
  components: { PostCard },
  setup() {
    const store = useStore(key);
    const latestPosts = computed((): Post[] => store.getters[LATEST_POSTS]);

    const fetchPosts = () => {
      store.dispatch(FETCH_POSTS);
    };

    onMounted(fetchPosts);

    return { latestPosts };
  },
});
</script>

<style></style>
