import { createStore, Store } from "vuex";

import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import { InjectionKey } from "vue";
import { GlobalState } from "./types";

export const key: InjectionKey<Store<GlobalState>> = Symbol();

export default createStore<GlobalState>({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});
