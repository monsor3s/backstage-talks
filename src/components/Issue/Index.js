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
import { Link } from 'react-router-dom'

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
                            <Link to='/'>Issue #6</Link>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <Link to='/issue5'>Issue #5</Link>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <Link to='/issue4'>Issue #4</Link>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <Link to='/issue3'>Issue #3</Link>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <Link to='/issue2'>Issue #2</Link>
                        </MenuFooterItem>
                        <MenuFooterItem>
                            <Link to='/issue1'>Issue #1</Link>
                        </MenuFooterItem>
                    </MenuFooter>
                </FooterRight>
            </ContainerFooterRight>
        </ContainerBackground>
    </Background>
  )
}

export default Issue