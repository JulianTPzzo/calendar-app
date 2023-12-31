import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, calendarSlice, authSlice } from "./";

export const store = configureStore({
  reducer: {
    auth:       authSlice.reducer,
    calendar:   calendarSlice.reducer,
    ui:         uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //solucion a error `payload.start`. Value: Fri Jul 07 2023 11:48:43 GMT-0300 (hora estándar de Argentina)
      serializableCheck: false,
    }),
});
