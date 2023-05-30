import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 68px;
    background-color: #bbada0;
    padding: 8px 4px;
    /* font-size: 25px; */
    border-radius: 3px;
`;

const Title = styled.div`
    color: #eee4da;
    font-size: 13px;
    font-weight: bold;
`;

const Count = styled.div`
    color: white;
    font-size: 25px;
    font-weight: bold;
`;

export default function Counter(props) {
    const {count, title} = props;

    return <Container>
        <Title>{title}</Title>
        <Count>{count}</Count>
    </Container>;
}
