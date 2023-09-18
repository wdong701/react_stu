/*
 * @Author: dlwan1
 * @Date: 2023-09-18 10:09:53
 * @LastEditTime: 2023-09-18 10:35:06
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\views\home\child-components\home-longfor\index.jsx
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import { LongforWrapper } from './style'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city} />
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongFor