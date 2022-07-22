import React from 'react'
import { ImgCentral, SectionIssueTwo, StockList, TextBuy, TextSection } from './IssueTwoElements'

import IssueTwo from '../../assets/assetIssue2.png'


function PageIssueTwo()  {
  return (
    <SectionIssueTwo>
        <ImgCentral src={IssueTwo} alt="Issue Two" />
        <TextBuy>BUY HERE</TextBuy>
        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
    </SectionIssueTwo>
  )
}

export default PageIssueTwo