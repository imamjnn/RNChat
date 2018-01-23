import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
//import { saveUserStorage } from './localStorage';

const url = 'https://kodean.000webhostapp.com/api/auth';

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

export { authLogin };