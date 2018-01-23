import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { getUser } from '../../services/auth';

class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    }
  }

  onRefresh = () => {
    getUser().then(data => {
      console.log(data);
      this.setState({ users: data.users, isLoading: false })
    })
  }

  componentDidMount() {
    this.onRefresh()
  }

  onPressList = (item) => {
    this.props.navigation.navigate('Chat', {item})
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => {
    let getData = {id: item.id, name: item.name, avatar: item.avatar};
    return (
      <View>
        <ListItem
          roundAvatar
          title={item.name}
          subtitle={item.email}
          avatar={{uri: item.avatar}}
          onPress={() => this.onPressList(getData)}
        />
      </View>
    )
  }

  render() {
    if(this.state.isLoading){
      return (
        <View style={styles.containerActivity}>
            <ActivityIndicator size="large" color="#f50057"/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f50057" />
        <FlatList 
          data={this.state.users}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerActivity: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Tab1;
