import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { RoomsWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoActon } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  const { roomList, isLoading, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading,
    totalCount: state.entire.totalCount,
  }), shallowEqual)

  const navitate = useNavigate()
  const dispatch = useDispatch()
  function handleItemClick(item) {
    navitate("/detail")
    dispatch(changeDetailInfoActon(item))
  }
  return (
    <RoomsWrapper>
            <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map((item, index) => {
            return (
              <RoomItem
                itemData={item}
                itemWidth="20%"
                key={item._id}
                itemClick={e => handleItemClick(item)}
              />
            )
          })
        }
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms