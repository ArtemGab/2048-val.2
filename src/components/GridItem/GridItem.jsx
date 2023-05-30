import styled from "styled-components";

const getBackgroundColor = count => {
    let color = "#eee4da";

    switch (count) {
        case 2:
            color = "#eee4da"
            break;
        case 4:
            color = "#ede0c8"
            break;
        case 8:
            color = "#f2b179"
            break;
        case 16:
            color = "#f59563"
            break;
        case 32:
            color = "#f67c5f"
            break;
        case 64:
            color = "#f65e3b"
            break;
        case 128:
            color = "#edcf72"
            break;
        case 256:
            color = "#edcc61"
            break;
        default:
            break;
    }

    return color;
}

const getColor = count => {
    let color = "#776e65";

    switch (count) {
        case 2:
        case 4:
            color = "#776e65"
            break;

        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
            color = "#f9f6f2"
            break;

        default:
            break;
    }

    return color;
}

const getSize = count => {
    let size = "55px";

    switch (count) {
        case 2:
        case 4:
            size = "55px"
            break;

        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
            size = "45px"
            break;

        default:
            break;
    }

    return size;
}

export const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 107px;
    height: 107px;
    background-color: ${props => getBackgroundColor(props.count)};
    color: ${props => getColor(props.count)};
    font-size: ${props => getSize(props.count)};
    font-weight: bold;
    border-radius: 3px;
`;
