/*
 * @Author: dlwan1
 * @Date: 2023-09-14 19:35:54
 * @LastEditTime: 2023-09-15 15:03:37
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\views\home\child-components\home-section-4\index.jsx
 */
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
