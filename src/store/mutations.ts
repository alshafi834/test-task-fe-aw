import { Post } from "@/api/types";
import { RECEIVE_POSTS } from "./constants";
import { GlobalState } from "./types";

const mutations = {
  [RECEIVE_POSTS](state: GlobalState, posts: Post[]): void {
    state.posts = posts;
  },
};

export default mutations;
