import {observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

//navigation service
import NavigationService from '../NavigationService';

class AuthStore{
    @observable token = null;

    @action async saveToken(token){
        try{
            await AsyncStorage.setItem('token', token);
            this.getToken();
        }catch (e){
            console.log(e);
        }
    }

    @action async removeToken(){
        try{
            await AsyncStorage.removeItem('token');
            this.token = null;
            this.getToken();
        }catch (e){
            console.log(e);
        }
    }

    @action async getToken(){
        try {
            const token = await AsyncStorage.getItem('token');
            if(!token) {
                NavigationService.navigate('Auth');
                return false;
            }
            this.token = token;
            NavigationService.navigate('App');
        } catch (e) {
            console.log(e)
            
        }
    }
}

export default new AuthStore();