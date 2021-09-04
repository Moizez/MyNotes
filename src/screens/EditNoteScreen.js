import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native'
import styled from 'styled-components/native';

const EditNoteScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const list = useSelector(state => state.notes.list)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [status, setStatus] = useState('new')

    useEffect(() => {
        if (route.params?.key != undefined && list[route.params.key]) {
            setStatus('edit')
            setTitle(list[route.params.key].title)
            setBody(list[route.params.key].body)
        }
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: status === 'new' ? 'Nova anotação' : 'Editar anotação',
            headerLeft: () => (
                <CloseButton underlayColor='transparent' onPress={handleCloseButton}>
                    <CloseButtonImage source={require('../assets/images/close.png')} />
                </CloseButton>
            ),
            headerRight: () => (
                <SaveButton underlayColor='transparent' onPress={handleSaveButton}>
                    <SaveButtonImage source={require('../assets/images/save.png')} />
                </SaveButton>
            )
        })
    }, [status, title, body])

    const handleCloseButton = () => navigation.goBack()

    const handleSaveButton = () => {
        if (title != '' && body != '') {
            if (status == 'edit') {
                dispatch({
                    type: 'EDIT_NOTE',
                    payload: {
                        key: route.params.key,
                        title: title,
                        body: body
                    }
                })
            } else {
                dispatch({
                    type: 'ADD_NOTE',
                    payload: {
                        title: title,
                        body: body
                    }
                })
            }

            navigation.goBack()
        } else {
            alert('Preencha o título ou o corpo!')
        }
    }

    const handleDeleteButton = () => {
        dispatch({
            type: 'DELETE_NOTE',
            payload: {
                key: route.params.key
            }
        })

        navigation.goBack()
    }

    return (
        <Container>

            <TitleInput
                placeholder='Digite o título'
                placeholderTextColor='#ddd'
                value={title}
                onChangeText={text => setTitle(text)}
            //autoFocus
            />

            <BodyInput
                placeholder='Digite a descrição'
                placeholderTextColor='#ddd'
                textAlignVertical='top'
                multiline
                value={body}
                onChangeText={text => setBody(text)}
            />

            {status === 'edit' &&
                <DeleteButton underlayColor='#f00' onPress={handleDeleteButton}>
                    <DeleteText>Apagar</DeleteText>
                </DeleteButton>
            }

        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #666;
`;

const TitleInput = styled.TextInput`
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
    color: #fff;
`;

const BodyInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    padding: 15px;
    color: #fff;
`;

const SaveButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

const SaveButtonImage = styled.Image`
    height: 20px;
    width: 20px;
`;

const CloseButton = styled.TouchableHighlight`
    margin-left: 15px;
`;

const CloseButtonImage = styled.Image`
    height: 19px;
    width: 19px;
`;

const DeleteButton = styled.TouchableHighlight`
    height: 40px;
    background-color: #ff3333;
    justify-content: center;
    align-items: center;

`;

const DeleteText = styled.Text`
    font-size: 15px;
    color: #fff;
`;




export default EditNoteScreen