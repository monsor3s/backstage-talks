import * as React from 'react'
import { 
    Background, 
    BodyCentralSubTittle, 
    BodyCentralTittle, 
    ContainerBackground, 
    ContainerBodyCentral, 
    ContainerHeaderTittle, 
    HeaderContact, 
    HeaderTittle, 
    ImgCentral} 
    
    from './IssueOneElements'

import HeaderImg from '../../assets/logo.png'
import AssetBody from '../../assets/assetIssue1.png'

const IssueOne = () => {
  return (
    <Background>
        <ContainerBackground>
            <ContainerHeaderTittle>
                <HeaderTittle src={HeaderImg} alt="Header Image"/>
                <HeaderContact>info@backstagetalks.com</HeaderContact>
            </ContainerHeaderTittle>
            <ContainerBodyCentral>
                <ImgCentral src={AssetBody} alt="Body Image" />
                <BodyCentralTittle>Issue #1 is sold out.</BodyCentralTittle>
                <BodyCentralSubTittle>if you are lucky, you may get the last pieces in selected stores.</BodyCentralSubTittle>
            </ContainerBodyCentral>
        </ContainerBackground>
    </Background>
  )
}

export default IssueOne