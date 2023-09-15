/*
 * @Author: dlwan1
 * @Date: 2023-09-15 11:28:01
 * @LastEditTime: 2023-09-15 15:05:24
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\views\home\child-components\home-tabs-3\index.jsx
 */
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import SectionHeader from '@/components/section-header/index'
import SectionRooms from '@/components/section-rooms/index'
import SectionTabs from '@/components/section-tabs/index'
import SectionFooter from '@/components/section-footer/index'
import { HomeTabs3Wrapper } from './style'


const HomeTabs3 = memo((props) => {
  const { infoData } = props
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)

  const tabClickHandle = useCallback(function tabClickHandle(index, name) {
    setName(name)
  }, [])
  return (
    <HomeTabs3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.333%" />
      <SectionFooter name={name} />
    </HomeTabs3Wrapper>
  )
})

HomeTabs3.propTypes = {
  infoData: PropTypes.object
}

export default HomeTabs3