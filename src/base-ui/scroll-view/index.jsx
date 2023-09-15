import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 按钮状态
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  //当前索引
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()

  const scrollContentRef = useRef()
  useEffect(() => {
    // 总共可滚动宽度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 已占宽度
    const clientWidth = scrollContentRef.current.clientWidth
    //当前可滚动宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    // 是否显示右侧按钮
    setShowRight(totalDistance > 0)
  }, [props.children])

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    setShowLeft(newOffsetLeft > 0)
    setShowRight(totalDistanceRef.current > newOffsetLeft)
  }
  return (
    <ViewWrapper>
      {
        showLeft && (
          <div className="control left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft />
          </div>
        )
      }
      {
        showRight && (
          <div className="control right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight />
          </div>
        )
      }
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView