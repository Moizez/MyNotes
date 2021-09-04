import React from 'react';
import styled from 'styled-components/native';


const EmptyList = () => {
    return (
        <Container>
            <Image source={require('../assets/images/note.png')} />
            <Text>Não há anotações no momento.</Text>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 50%;
`;

const Image = styled.Image``;

const Text = styled.Text`
    font-size: 17px;
    color: #fff;
    margin-top: 15px;
`;

export default EmptyList