import * as React from 'react'
import { 
    Background, 
    BodyCentralSubTittle, 
    BodyCentralTittle, 
    ContainerBackground, 
    ContainerBodyCentral, 
    ContainerFooterLeft, 
    ContainerFooterRight, 
    ContainerHeaderTittle, 
    Description, 
    FooterParagraph, 
    FooterRight, 
    HeaderContact, 
    HeaderTittle, 
    ImgCentral,
    MenuFooter,
    MenuFooterItem,
    MenuLink,
    Published,
    SectionScroll,
    SpanCopyright,
    StockList
} from './IssueElements'

import HeaderImg from '../../assets/logo.png'
import IssueOne from '../../assets/assetIssue1.png'
import IssueTwo from '../../assets/assetIssue2.png'
import IssueThree from '../../assets/assetIssue3.png'

const Issue = () => {
  return (
    <Background>
        <ContainerBackground>
            <ContainerHeaderTittle>
                <HeaderTittle src={HeaderImg} alt="Header Image"/>
                    <ContainerFooterLeft>
                    <Description>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right s, we need to talk. </Description>
                    <SpanCopyright>© 2022
                            <Published> Published by studio Milk</Published>
                    </SpanCopyright>
                    <FooterParagraph>Privacy Policy</FooterParagraph>
                    </ContainerFooterLeft>
            </ContainerHeaderTittle>
            <ContainerBodyCentral>
                <SectionScroll>
                    <ImgCentral src={IssueOne} alt="Issue One" />
                    <ImgCentral src={IssueTwo} alt="Issue Two" />
                    <ImgCentral src={IssueThree} alt="Issue Three" />
                </SectionScroll>
                <BodyCentralTittle>Issue #1 is sold out.</BodyCentralTittle>
                <BodyCentralSubTittle>if you are lucky, you may get the last pieces in <StockList>selected stores</StockList>.
                </BodyCentralSubTittle>
            </ContainerBodyCentral>  
            <ContainerFooterRight>
                <FooterRight>
                    <HeaderContact>info@backstagetalks.com</HeaderContact>
                    <MenuFooter>
                        <MenuFooterItem>
                            <MenuLink>Issue #5</MenuLink>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <MenuLink>Issue #4</MenuLink>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <MenuLink>Issue #3</MenuLink>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <MenuLink>Issue #2</MenuLink>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <MenuLink>Issue #1</MenuLink>
                        </MenuFooterItem>
                    </MenuFooter>
                </FooterRight>
            </ContainerFooterRight>
        </ContainerBackground>
    </Background>
  )
}

export default Issue