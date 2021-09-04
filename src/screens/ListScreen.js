import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import Note from '../components/Note'

const ListScreen = () => {

    const navigation = useNavigation()
    const list = useSelector(state => state.notes.list)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Minhas Notas',
            headerRight: () => (
                <AddButton onPress={() => navigation.navigate('EditNote')}>
                    <AddImage source={require('../assets/images/more.png')} />
                </AddButton>
            )
        })
    }, [])

    const handleNotePress = () => {

    }

    return (
        <Container>
            <NotesList
                data={list}
                renderItem={({ item, index }) => <Note data={item} index={index} onPress={handleNotePress} />}
                keyExtractor={index => index.toString()}
            />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #DDD;
    justify-content: center;
    align-items: center;
`;

const AddButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

const AddImage = styled.Image`
    height: 24px;
    width: 24px;
`;

const NotesList = styled.FlatList`
    flex: 1;
    width: 100%;
`;

export default ListScreen