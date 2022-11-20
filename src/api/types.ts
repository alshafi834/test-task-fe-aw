export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface Todo {
  id: number;
  user_id: number;
  title: string;
  due_on: Date;
  status: Status;
}

export enum Status {
  Completed = "completed",
  Pending = "pending",
}

/* export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
} */
