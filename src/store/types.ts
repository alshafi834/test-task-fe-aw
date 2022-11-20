import { Post, Todo } from "@/api/types";

export interface GlobalState {
  posts: Post[];
  todos: Todo[];
}
