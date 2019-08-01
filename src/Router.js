import React from 'react';

import { 
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

/*auth stack*/
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

//auth loading
import AuthLoading from './screens/AuthLoading'

/* screens */
import Home from './screens/Home'
import ProjectDetail from './screens/Home/ProjectDetail'
import Profile from './screens/Profile'
import AddProject from './screens/AddProject'

const ProjectStack = createStackNavigator({
    Projects: {
        screen: Home,
        navigationOptions: {
            title: 'Anasayfa'
        }
    },
    ProjectDetail: {
        screen: ProjectDetail,
        navigationOptions: {
            title: 'Proje Detayı'
        }
    }
});

const AuthStack = createBottomTabNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Giriş Yap',
            tabBarIcon: ({ tintColor }) => (<Icon name="md-log-in" size={24} color={tintColor} />)
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Kayıt Ol',
            tabBarIcon: ({ tintColor }) => (<Icon name="md-person-add" size={24} color={tintColor} />)
        }
    }
},
{
    initialRouteName: 'SignIn'
}
);

const AppStack = createBottomTabNavigator({
    Home:{
        screen: ProjectStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="md-home" size={24} color={tintColor} />),
            title: 'Anasayfa'
        }
    },
    AddProject:{
        screen: AddProject,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="md-add" size={27} color={tintColor} />),
            title: 'Yeni Fikir'
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="md-person" size={24} color={tintColor} />),
            title: 'Profil'
        }
    },

});

const SwitcNavigator = createSwitchNavigator(
    {
        AuthLoading: {
            screen: AuthLoading
        },
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
);

export default createAppContainer(SwitcNavigator);