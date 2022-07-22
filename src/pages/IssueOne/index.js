import React from 'react'

import { ImgCentral, SectionIssueOne, StockList, TextBuy, TextSection } from './IssueOneElements'

import IssueOne from '../../assets/assetIssue1.png'


function PageIssueOne()  {
  return (
    <SectionIssueOne>
        <ImgCentral src={IssueOne} alt="Issue One" />
        <TextBuy>BUY HERE</TextBuy>
        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
    </SectionIssueOne>
  )
}

export default PageIssueOne