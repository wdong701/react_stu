import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import classNames from 'classnames'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderLeft from './child-components/header-left'
import HeaderCenter from './child-components/header-center'
import HeaderRright from './child-components/header-right'

const Header = memo(() => {
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed } = headerConfig
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className='content'>
        <div className='top'>
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRright />
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default Header