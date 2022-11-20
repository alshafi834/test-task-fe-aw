<template>
  <div class="card h-100" style="width: 15rem">
    <div class="card-body">
      <h5 class="card-title">{{ post.title.substr(0, 20) }}</h5>
      <p class="card-text">
        {{ post.body.substr(0, 100) }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
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
});
</script>
