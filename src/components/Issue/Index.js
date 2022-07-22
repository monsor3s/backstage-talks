import * as React from 'react'
import { 
    Background, 
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
    MenuFooter,
    MenuFooterItem,
    MenuLink,
    Published,
    SectionScroll,
    SpanCopyright
} from './IssueElements'

import HeaderImg from '../../assets/logo.png'

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