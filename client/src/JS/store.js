import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import productSlice  from "./ProductSlice";
import commandeSlice from "./commandeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product:productSlice,
    commande:commandeSlice

  },
});
