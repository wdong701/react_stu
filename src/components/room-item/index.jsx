/*
 * @Author: dlwan1
 * @Date: 2023-09-14 15:44:38
 * @LastEditTime: 2023-09-14 20:01:56
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\components\room-item\index.jsx
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Rating } from '@mui/material'
import { ItemWrapper } from "./style"

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"} itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
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