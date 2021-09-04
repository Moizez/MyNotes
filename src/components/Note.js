import React from 'react';
import styled from 'styled-components/native';


const Note = ({ data, index, onPress }) => {
    return (
        <Container onPress={() => onPress(index)}>
            <Title>{data.title}</Title>
        </Container>
    );
}

const Container = styled.TouchableHighlight`
    padding: 15px;
    border-style: solid;
    border-bottom-color: #444;
    border-bottom-width: 1px;
`;

const Title = styled.Text`
    font-size: 17px;
    color: #fff;
`;


export default Note