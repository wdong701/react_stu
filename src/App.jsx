/*
 * @Author: dlwan1
 * @Date: 2023-09-12 16:54:33
 * @LastEditTime: 2023-09-13 15:54:34
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\App.jsx
 */
import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './components/Header'
import Footer from './components/Footer'

const App = memo(() => {
  return (
    <div className='app'>
      <Header/>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <Footer/>
    </div>
  )
})

export default App
