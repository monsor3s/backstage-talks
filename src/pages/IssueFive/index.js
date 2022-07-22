import * as React from 'react'

import { ImgCentral, SectionIssueFive, StockList, TextBuy, TextSection } from './IssueFiveElements'

import IssueFive from '../../assets/assetIssue5.png'

function PageIssueFive()  {
    return (
            <SectionIssueFive>
                <ImgCentral src={IssueFive} alt="Issue Five" />
                <TextBuy>BUY HERE</TextBuy>
                <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
            </SectionIssueFive>
    )
}

export default PageIssueFive