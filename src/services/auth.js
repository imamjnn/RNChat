import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { getUserStorage } from './localStorage';

const url = 'https://kodean.000webhostapp.com/api';


async function authLogin(userName, passWord) {
  try{
    let response = await fetch(`${url}/auth/check_login`, {
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

// Get user
async function getUser() {
  try{
    let response = await fetch(`${url}/user/getuser`, {
      method: 'GET',
      headers: {
        'Authorization': 'ceda30b2ea484210eb27b4ad0106babe',
      }
    });
    //save token
    //saveUserStorage(response.id, response.token, response.username);
    return response.json();
  } catch(error){
    console.log(error);
  }
}

export { authLogin, getUser };