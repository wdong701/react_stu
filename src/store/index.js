/*
 * @Author: dlwan1
 * @Date: 2023-09-13 14:19:01
 * @LastEditTime: 2023-09-13 14:39:00
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\store\index.js
 */
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home';
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})
export default store