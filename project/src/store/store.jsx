import { createStore } from "redux";
import { rootReducers } from "./modules/rootReducer";

export const store = createStore(rootReducers);
