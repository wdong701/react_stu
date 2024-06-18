import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './child-components/entire-filter'
import EntireRooms from './child-components/entire-rooms'
import EntirePagination from './child-components/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchEntireDataAction } from '@/store/modules/entire/createActions'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire