import styled from "styled-components";
import HeaderGame from "../HeaderGame/HeaderGame";
import FieldGame from "../FieldGame/FieldGame";

const Main = styled.div`
    margin: 0 auto;
    /* padding: 0 100px; */
    width: 500px;
    height: 100vh;
    box-sizing: border-box;
    background-color: #faf8ef;
    font-family: clear sans, helvetica neue, Arial, sans-serif;
`;

export default function Game() {
    const gridItems = [
        [
            {id: 0, value: 0},
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0}
        ],
        [
            {id: 4, value: 2},
            {id: 5, value: 0},
            {id: 6, value: 0},
            {id: 7, value: 0}
        ],
        [
            {id: 8, value: 0},
            {id: 9, value: 8},
            {id: 10, value: 0},
            {id: 11, value: 0}
        ],
        [
            {id: 12, value: 0},
            {id: 13, value: 0},
            {id: 14, value: 0},
            {id: 15, value: 0}
        ]
    ];

    return <Main>
        <HeaderGame />
        <FieldGame gridItems={gridItems} />
    </Main>;
}
