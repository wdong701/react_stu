import React, { memo, useEffect } from 'react'
import { HomeWapper } from "./style"
import HomeBanner from './child-components/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { fetchHomeDataAction } from '../../store/modules/home'
import HomeSection4 from './child-components/home-section-4'
import HomeTabs3 from './child-components/home-tabs-3'
import { isEmpty } from '@/utils'
import HomeLongFor from './child-components/home-longfor'
import HomeSectionPlus from './child-components/home-section-plus'

const Home = memo(() => {

  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: true }))
  }, [dispatch])

  return (
    <HomeWapper>
      <HomeBanner />
      <div className="content">
        {isEmpty(discountInfo) && <HomeTabs3 infoData={discountInfo} />}
        {isEmpty(recommendInfo) && <HomeTabs3 infoData={recommendInfo} />}
        {isEmpty(longforInfo) && <HomeLongFor infoData={longforInfo} />}
        {isEmpty(goodPriceInfo) && <HomeSection4 infoData={goodPriceInfo} />}
        {isEmpty(highScoreInfo) && <HomeSection4 infoData={highScoreInfo} />}
        {isEmpty(plusInfo) && <HomeSectionPlus infoData={plusInfo} />}
      </div>
    </HomeWapper>
  )
})

export default Home