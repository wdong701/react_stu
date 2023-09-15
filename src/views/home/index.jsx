/*
 * @Author: dlwan1
 * @Date: 2023-09-13 10:23:33
 * @LastEditTime: 2023-09-15 14:48:44
 * @LastEditors: dlwan1
 * @Description:  
 * @FilePath: \study_react\src\views\home\index.jsx
 */
import React, { memo, useEffect } from 'react'
import { HomeWapper } from "./style"
import HomeBanner from './child-components/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '../../store/modules/home'
import HomeSection4 from './child-components/home-section-4'
import HomeTabs3 from './child-components/home-tabs-3'
import { isEmpty } from '@/utils'

const Home = memo(() => {

  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo
  }), shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWapper>
      <HomeBanner />
      <div className="content">
        {isEmpty(discountInfo) && <HomeTabs3 infoData={discountInfo} />}
        {isEmpty(recommendInfo) && <HomeTabs3 infoData={recommendInfo} />}
        {isEmpty(goodPriceInfo) && <HomeSection4 infoData={goodPriceInfo} />}
        {isEmpty(highScoreInfo) && <HomeSection4 infoData={highScoreInfo} />}
      </div>
    </HomeWapper>
  )
})

export default Home