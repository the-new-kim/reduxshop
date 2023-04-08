import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/slices/counterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import currencyReducer from "./slices/currencySlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  currency: currencyReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: [logger],
});

export const persistor = persistStore(store);

// how to connect store to React Redux
// React Redux is typed
// but it doesn't know the schema for our store.
// so we need to give it the schema for our store and our dispatcher

export type RootState = ReturnType<typeof store.getState>; // the total state of the store
export type AppDispatch = typeof store.dispatch;

// export const makeStore = () =>
//   configureStore({
//     reducer: { productReducer },
//   });

// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];

// export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
