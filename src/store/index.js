import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail"

const store = configureStore({
  reducer: {
    home: homeReducer,
    main: mainReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})
export default store