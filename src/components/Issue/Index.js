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
    SectionIssueFive,
    SectionIssueFour,
    SectionIssueOne,
    SectionIssueSix,
    SectionIssueThree,
    SectionIssueTwo,
    SectionScroll,
    SpanCopyright,
    StockList,
    TextBuy,
    TextSection
} from './IssueElements'

import HeaderImg from '../../assets/logo.png'
import IssueOne from '../../assets/assetIssue1.png'
import IssueTwo from '../../assets/assetIssue2.png'
import IssueThree from '../../assets/assetIssue3.png'
import IssueFour from '../../assets/assetIssue4.png'
import IssueFive from '../../assets/assetIssue5.png'
import IssueSix from '../../assets/assetIssue6.png'


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
                    <SectionIssueSix>
                        <ImgCentral src={IssueSix} alt="Issue Six" />
                        <TextBuy>BUY HERE</TextBuy>
                        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
                    </SectionIssueSix>
                    <SectionIssueFive>
                        <ImgCentral src={IssueFive} alt="Issue Five" />
                        <TextBuy>BUY HERE</TextBuy>
                        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
                    </SectionIssueFive>
                    <SectionIssueFour>
                        <ImgCentral src={IssueFour} alt="Issue Four" />
                        <TextBuy>BUY HERE</TextBuy>
                        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
                    </SectionIssueFour>
                    <SectionIssueThree>
                        <ImgCentral src={IssueThree} alt="Issue Three" />
                        <TextBuy>BUY HERE</TextBuy>
                        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
                    </SectionIssueThree>
                    <SectionIssueTwo>
                        <ImgCentral src={IssueTwo} alt="Issue Two" />
                        <TextBuy>BUY HERE</TextBuy>
                        <TextSection>or in<StockList>selected stores</StockList>.</TextSection>
                    </SectionIssueTwo>
                    <SectionIssueOne>
                        <ImgCentral src={IssueOne} alt="Issue One" />
                        <BodyCentralTittle>Issue #1 is sold out.</BodyCentralTittle>
                        <BodyCentralSubTittle>if you are lucky, you may get the last pieces in<StockList>selected stores</StockList>.
                        </BodyCentralSubTittle>       
                    </SectionIssueOne>
                </SectionScroll>
            </ContainerBodyCentral>  
            <ContainerFooterRight>
                <FooterRight>
                    <HeaderContact>info@backstagetalks.com</HeaderContact>
                    <MenuFooter>
                        <MenuFooterItem>
                            <MenuLink>Issue #6</MenuLink>
                        </MenuFooterItem>
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