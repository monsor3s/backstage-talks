import React from 'react'
import { ImgCentral, SectionIssueFour, StockList, TextBuy, TextSection } from './IssueFourElements'

import IssueFour from '../../assets/assetIssue4.png'


function IssueFour()  {
  return (
    <SectionIssueFour>
        <ImgCentral src={IssueFour} alt="Issue Four" />
        <TextBuy>BUY HERE</TextBuy>
        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
    </SectionIssueFour>
  )
}

export default IssueFour