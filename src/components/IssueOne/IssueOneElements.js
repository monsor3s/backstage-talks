import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--red);
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const ContainerBackground = styled.div`
    width: calc(100vw - 30px);
    height: calc(100vh - 30px);
`;

export const ContainerHeaderTittle = styled.div`
    width: auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTittle = styled.img`
    position: relative;
    width: 260px;
    height: 30px;
    
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

export const ImgCentral = styled.img`
    width: 420px;
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

