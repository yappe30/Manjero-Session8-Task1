import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import getEmployeeData  from './slices/employeeSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./slices/postApi";

export const store = configureStore({
    reducer: {
        employeeData: getEmployeeData,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware),
    
});

setupListeners(store.dispatch);