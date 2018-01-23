import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { getUserStorage } from './LocalStorage';

const url = 'http://192.168.1.14/~jnn007/cingular/api/user';

// Get user
async function getUser() {
  try{
    let response = await fetch(`${url}/getuser`, {
      method: 'GET',
      headers: {
        'Authorization': '9839e870ae0eed2e2cb810c39c9f3ac5',
      }
    });
    //save token
    //saveUserStorage(response.id, response.token, response.username);
    return response.json();
  } catch(error){
    console.log(error);
  }
}

export { getUser };