import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './child-components/header-left'
import HeaderCenter from './child-components/header-center'
import HeaderRright from './child-components/header-right'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRright/>
    </HeaderWrapper>
  )
})

export default Header