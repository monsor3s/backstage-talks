import React from 'react'
import { ImgCentral, SectionIssueSix, StockList, TextBuy, TextSection } from './IssueSixElements'

import IssueSix from '../../assets/assetIssue6.png'


function IssueSix()  {
  return (
    <SectionIssueSix>
        <ImgCentral src={IssueSix} alt="Issue Six" />
        <TextBuy>BUY HERE</TextBuy>
        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
    </SectionIssueSix>
  )
}

export default IssueSix