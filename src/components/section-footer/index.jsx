/*
 * @Author: dlwan1
 * @Date: 2023-09-15 15:00:31
 * @LastEditTime: 2023-09-18 11:02:46
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\components\section-footer\index.jsx
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { SectionFooterWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }
  return (
    <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <div className="text">{showMessage}</div>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter