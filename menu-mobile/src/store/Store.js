import {createStore } from "redux";
import requestsReducer from "./Request";

export const store = createStore(requestsReducer)