import styled from 'styled-components';

export const SectionIssueTwo = styled.div`
    width: 500px;
    height: 727px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextBuy = styled.a`
    font-size: 15px;
    line-height: 22px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const TextSection = styled.p`
    font-size: 15px;
    font-weight: bold;
    padding-top: 3px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImgCentral = styled.img`
    width: 420px;
    scroll-snap-align: center;
`;

export const StockList = styled.a`
    font-size: 15px;
    font-weight: bold;
    line-height: 22px;
    color: white;
    margin-left: 3px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;