import styled from "styled-components";

export const Grid = styled.div`
    padding: 15px;
    width: 500px;
    height: 500px;
    box-sizing: border-box;
    background-color: #bbada0;
    border-radius: 6px;
`;

export const GridRow = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    box-sizing: border-box;
`;

export const GridCell = styled.div`
    width: 107px;
    height: 107px;
    box-sizing: border-box;
    background: rgba(238, 228, 218, .35);
    border-radius: 3px;
`;

