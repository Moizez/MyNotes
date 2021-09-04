import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import ListScreen from '../screens/ListScreen'
import EditNoteScreen from '../screens/EditNoteScreen'

const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#333',
            },
            headerTintColor: '#FFF'
        }}>
            <Stack.Screen name='List' component={ListScreen} />
            <Stack.Screen name='EditNote' component={EditNoteScreen} />
        </Stack.Navigator>
    );
}

export default MainStack