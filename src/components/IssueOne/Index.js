import * as React from 'react'
import { 
    Background, 
    BodyCentralSubTittle, 
    BodyCentralTittle, 
    ContainerBackground, 
    ContainerBodyCentral, 
    ContainerFooterLeft, 
    ContainerHeaderTittle, 
    Description, 
    FooterParagraph, 
    HeaderContact, 
    HeaderTittle, 
    ImgCentral,
    Published,
    SpanCopyright
} from './IssueOneElements'

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
            <ContainerFooterLeft>
                <Description>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk. </Description>
                <SpanCopyright>© 2022
                        <Published> Published by studio Milk</Published>
                </SpanCopyright>
                <FooterParagraph>Privacy Policy</FooterParagraph>
            </ContainerFooterLeft>
        </ContainerBackground>
    </Background>
  )
}

export default IssueOne