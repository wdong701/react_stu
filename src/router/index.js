/*
 * @Author: dlwan1
 * @Date: 2023-09-13 10:12:37
 * @LastEditTime: 2023-09-13 10:32:41
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\router\index.js
 */
import React from "react"
import { Navigate } from "react-router-dom"
const Home = React.lazy(()=>import("@/views/home"))
const Entire = React.lazy(()=>import("@/views/entire"))
const Detail = React.lazy(()=>import("@/views/detail"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/entire",
    element: <Entire/>
  },
  {
    path: "/detail",
    element: <Detail/>
  },
]

export default routes