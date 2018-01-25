import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { getUserStorage } from './LocalStorage';
import Storage from '../services/Storage';

const url = 'https://kodean.000webhostapp.com/api/user';

// Get user
async function getUser(id) {
  try{
    let response = await fetch(`${url}/getuser/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': Storage.getToken(),
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