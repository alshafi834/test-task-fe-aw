<template>
  <div class="mt-4">
    <h3 class="py-2">Latest Posts</h3>

    <div class="container">
      <div class="row gx-5 gy-5">
        <div class="col" v-for="post in latestPosts" :key="post">
          <div class="card h-100" style="width: 15rem">
            <div class="card-body">
              <h5 class="card-title">{{ post.title.substr(0, 20) }}</h5>
              <p class="card-text">
                {{ post.body.substr(0, 100) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent } from "vue";
import { useStore } from "vuex";
//import axios from "axios";
import { FETCH_POSTS } from "../../store/constants";
import { key } from "../../store";
import { Post } from "../../api/types";

export default defineComponent({
  name: "LatestPosts",
  setup() {
    const store = useStore(key);
    //const latestPosts = store.state.posts;
    const latestPosts = computed((): Post[] => store.state.posts);

    const fetchPosts = () => {
      store.dispatch(FETCH_POSTS);
    };

    /* const fetchmyPost = async () => {
      const baseUrl = "https://gorest.co.in/public/v2";
      const response = await axios.get(`${baseUrl}/posts`);
      latestPosts.value = response.data;
    }; */

    onMounted(fetchPosts);

    return { latestPosts };
  },
});
</script>

<style></style>
