import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = memo(() => {
  function useScrollTop() {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
  }
  useScrollTop()
  return (
    <div className='app'>
      <Header />
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <Footer />
    </div>
  )
})

export default App
