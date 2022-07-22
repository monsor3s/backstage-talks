import React from 'react'
import { ImgCentral, SectionIssueThree, StockList, TextBuy, TextSection } from './IssueThreeElements'

import IssueThree from '../../assets/assetIssue3.png'


function PageIssueThree()  {
  return (
    <SectionIssueThree>
        <ImgCentral src={IssueThree} alt="Issue Three" />
        <TextBuy>BUY HERE</TextBuy>
        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
    </SectionIssueThree>
  )
}

export default PageIssueThree