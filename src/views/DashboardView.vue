<template>
  <div class="container mt-5">
    <h2 class="text-center">My Dashboard</h2>
    <latest-posts />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import LatestPosts from "@/components/Posts/LatestPosts.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardView",
  components: { LatestPosts },
});
</script>
