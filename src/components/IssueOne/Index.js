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
                    <ContainerFooterLeft>
                    <Description>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk. </Description>
                    <SpanCopyright>© 2022
                            <Published> Published by studio Milk</Published>
                    </SpanCopyright>
                    <FooterParagraph>Privacy Policy</FooterParagraph>
                    </ContainerFooterLeft>
            </ContainerHeaderTittle>
            <ContainerBodyCentral>
                <ImgCentral src={AssetBody} alt="Body Image" />
                <BodyCentralTittle>Issue #1 is sold out.</BodyCentralTittle>
                <BodyCentralSubTittle>if you are lucky, you may get the last pieces in selected stores.</BodyCentralSubTittle>
            </ContainerBodyCentral>
            
            <ContainerFooterRight>
                <FooterRight>
                    <HeaderContact>info@backstagetalks.com</HeaderContact>
                    <MenuFooter>
                        <MenuFooterItem>
                            <MenuLink>Issue #1</MenuLink>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <MenuLink>Issue #2</MenuLink>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <MenuLink>Issue #3</MenuLink>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <MenuLink>Issue #4</MenuLink>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <MenuLink>Issue #5</MenuLink>
                        </MenuFooterItem>
                    </MenuFooter>
                </FooterRight>
            </ContainerFooterRight>
        </ContainerBackground>
    </Background>
  )
}

export default IssueOne