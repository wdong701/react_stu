import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import { SectionPlusWrapper } from './style'

const SectionPlus = memo((props) => {
  const { infoData } = props
  return (
    <SectionPlusWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus"/>
    </SectionPlusWrapper>
  )
})

SectionPlus.propTypes = {
  infoData: PropTypes.object
}

export default SectionPlus