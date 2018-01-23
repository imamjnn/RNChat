import { AsyncStorage } from 'react-native';

// get data
export const getUserStorage = () => {
  return new Promise((resolve) => {
    AsyncStorage.getItem('users').then((res) => {
      resolve(JSON.parse(res));
    })
  })
}

// save data
export const saveUserStorage = (User, Token) => {
  const data = {user: User, token: Token};
  return new Promise((resolve) => {
    AsyncStorage.setItem('users', JSON.stringify(data)).then((res) => {
      resolve(JSON.parse(res));
    })
  })
}