/*
 * @Author: dlwan1
 * @Date: 2023-09-15 15:00:31
 * @LastEditTime: 2023-09-15 15:08:30
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\components\section-footer\index.jsx
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }
  return (
    <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info">
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