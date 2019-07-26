import React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

/* screens */
import Home from './screens/Home/Home'
import Profile from './screens/Profile/Profile'
import AddProject from './screens/AddProject/AddProject'

const TabNavigator = createBottomTabNavigator({
    Home:{
        screen: Home
    },
    AddProject:{
        screen: AddProject
    },
    Profile:{
        screen: Profile
    },

});

export default createAppContainer(TabNavigator);