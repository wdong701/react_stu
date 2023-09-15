/*
 * @Author: dlwan1
 * @Date: 2023-09-14 10:54:55
 * @LastEditTime: 2023-09-14 11:10:25
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\components\section-header\index.jsx
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <SectionHeaderWrapper>
      <h2 className='title'>{title}</h2>
      {subtitle && <div className='subtitle'>{subtitle}</div>}
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader