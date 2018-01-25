import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
//import { getUserStorage } from '../services/LocalStorage';

const url = 'https://kodean.000webhostapp.com/api/auth';

const checkUser = () => {
  return new Promise((resolve) => {
    AsyncStorage.getItem('users').then(res => {
      if(res !== null){
        resolve(true)
      }else{
        resolve(false)
      }
    })
  })
} 

async function authLogin(userName, passWord) {
  try{
    let response = await fetch(`${url}/check_login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username: userName,
        password: passWord
      })
    });
    //save token
    //saveUserStorage(response.id, response.token, response.username);
    return response.json();
  } catch(error){
    console.log(error);
  }
}

async function authLogout(token) {
  try{
    let response = await fetch(`${url}/native_logout/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.json();
  } catch(error){
    console.log(error);
  }
}

export { authLogin, checkUser, authLogout };