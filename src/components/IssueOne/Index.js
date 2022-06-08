import * as React from 'react'
import { Background, ContainerHeaderTitle, HeaderTitle } from './IssueOneElements'
import HeaderImg from '../../assets/logo.png'

const IssueOne = () => {
  return (
    <Background>
        <ContainerHeaderTitle>
        <HeaderTitle src={HeaderImg} alt="Header Image"/>
        </ContainerHeaderTitle>
    </Background>
  )
}

export default IssueOne