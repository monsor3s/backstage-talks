import styled from 'styled-components';

export const Background = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-light);
`;

export const ContainerBackground = styled.div`
    width: calc(100vw - 30px);
    height: calc(100vh - 30px);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
`;

export const ContainerHeaderTittle = styled.div`
    position: relative;
    width: 365px;
    height: 715px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const HeaderTittle = styled.img`
    position: relative;
    width: 260px;
    height: 30px;
`;

export const ContainerFooterLeft = styled.div`
    position: relative;
    width: 365px;
    height: 232px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Description = styled.p`
    width: 320px;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    
`;

export const SpanCopyright = styled.span`
    font-size: 12px;
    font-weight: normal;
    line-height: 25px;
`;

export const Published = styled.a`
    font-size: 12px;
    font-weight: normal;
    text-decoration: underline;
    line-height: 25px;

    &:hover {
        cursor: pointer;
    }
`;

export const FooterParagraph = styled.p`
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
    margin-top: 20px;

    &:hover {
        text-decoration: none;
        cursor: pointer;
    }
`;

export const HeaderContact = styled.a`
    position: relative;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const ContainerBodyCentral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SectionScroll = styled.div`
    width: 500px;
    scrollbar-width: none;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-snap-type: y mandatory;

`;

export const SectionIssueOne = styled.div`
    width: 500px;
    height: 727px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SectionIssueTwo = styled(SectionIssueOne)`

`;

export const SectionIssueThree = styled(SectionIssueOne)`

`;

export const SectionIssueFour = styled(SectionIssueOne)`

`;



export const SectionIssueSix = styled(SectionIssueOne)`

`;



export const BodyCentralTittle = styled.p`
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
`;

export const BodyCentralSubTittle = styled.p`
    font-size: 15px;
    font-weight: bold;
    padding-top: 3px;
    line-height: 22px;
`;


export const ContainerFooterRight = styled.div`
    position: relative;
    width: 224px;
    height: 771px;
`;

export const FooterRight = styled.div`
    position: relative;
    width: 224px;
    height: 715px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

export const MenuFooter = styled.ul`
    position: relative;
    width: 100px;
    list-style: none;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const MenuFooterItem = styled.li`
    position: relative;
    width: 70px;
    height: 28px;
    

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const MenuLink = styled.a`
    position: relative;
    color: black;
    text-align: right;
    list-style: none;
    font-size: 18px;
    line-height: 1.6;
`;
