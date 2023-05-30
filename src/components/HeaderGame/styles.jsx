import styled from "styled-components";

export const Header = styled.div`

`;

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    font-size: 80px;
    color: #776e65;
    font-weight: 700;
`;

export const Counters = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
`;

export const HeaderRules = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 6px;
`;

export const Titles = styled.div`
    flex: 1;
    font-size: 18px;
    color: #776e65;
`;

export const Text = styled.span`
    line-height: 30px;
`;

export const TextBold = styled.span`
    font-weight: bold;
`;

export const NewGame = styled.button`
    padding: 0 20px;
    height: 40px;
    background-color: #8f7a66;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;
`;
