import React from 'react';
import { AsyncStorage } from 'react-native'

export const checkUser = () => {
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