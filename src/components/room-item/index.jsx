import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { ItemWrapper } from "./style"
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { Carousel } from 'antd';
import Indicator from '@/base-ui/Indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const swiperRef = useRef()

  function controlClickHandle(isNext = true, event) {
    if (isNext) swiperRef.current.next()
    else swiperRef.current.prev()

    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectIndex(newIndex)
    // 阻止事件冒泡
    event.stopPropagation()
  }

  function itemClickHandle() {
    if (itemClick) itemClick()
  }
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"} itemWidth={itemWidth} onClick={itemClickHandle}>
      <div className="inner">
        {
          !itemData.picture_urls ? <div className='cover'>
            <img src={itemData.picture_url} alt="" />
          </div> :
            <div className='slider'>
              <div className='control'>
                <div className="btn left" onClick={e => controlClickHandle(false, e)}>
                  <IconArrowLeft width="24" height="24" />
                </div>
                <div className="btn right" onClick={e => controlClickHandle(true, e)}>
                  <IconArrowRight width="24" height="24" />
                </div>
              </div>
              <div className='indicator'>
                <Indicator selectIndex={selectIndex}>
                  {
                    itemData.picture_urls.map((item, index) => {
                      return (
                        <div className='item' key={item}>
                          <span className={classNames("dot", { active: selectIndex === index })}></span>
                        </div>
                      )
                    })
                  }
                </Indicator>
              </div>
              <Carousel dots={false} ref={swiperRef}>
                {
                  itemData.picture_urls.map((item, index) => {
                    return (
                      <div key={index} className="cover">
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
        }

        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
      </div>
      <div className="bottom">
        <Rating
          value={itemData.star_rating ?? 5}
          precision={0.1}
          readOnly
          sx={{ fontSize: "14px", color: "skyblue", marginRight: "-1px" }}
        />
        <span className='count'>{itemData.reviews_count}</span>
        {
          itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
        }
      </div>
    </ItemWrapper>

  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem