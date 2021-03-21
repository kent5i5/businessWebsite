import { createStore, applyMiddleware } from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit'

import rootReducer from "../reducer";

import { forbiddenWordsMiddleware } from "../middleware";
const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)
);


export default store;