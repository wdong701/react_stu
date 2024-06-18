import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header/index'
import SectionRooms from '@/components/section-rooms/index'
import SectionFooter from '@/components/section-footer/index'
import { HomeSectionWrapper } from './style'

const HomeSection4 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionRooms roomList={infoData.list} itemWidth="25%"/>
      <SectionFooter/>
    </HomeSectionWrapper>
  )
})

HomeSection4.propTypes = {
  infoData: PropTypes.object
}

export default HomeSection4
