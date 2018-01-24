import { AsyncStorage } from 'react-native';

class Storage {
  uid = '';
  token = '';
  constructor() {
    AsyncStorage.getItem('users').then((res) => {
      var resJson = JSON.parse(res);
      this.setUid(resJson.user);
      this.setToken(resJson.token);
    })
  }
  setUid(value) {
    this.uid = value;
  }
  setToken(value) {
    this.token = value;
  }
  getUid() {
    return this.uid;
  }
  getToken() {
    return this.token;
  }
}

export default new Storage();