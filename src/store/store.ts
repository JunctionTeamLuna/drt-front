import { configureStore } from "@reduxjs/toolkit";
import positionReducer from "./position";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
    reducer: { position: positionReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
