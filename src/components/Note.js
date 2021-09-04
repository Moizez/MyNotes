import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';


const Note = ({ data, index, onPress }) => {
    return (
        <Container>
            <Title>{data.title}</Title>
        </Container>
    );
}

const Container = styled.TouchableHighlight``;

const Title = styled.Text``;


export default Note