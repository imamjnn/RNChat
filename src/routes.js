import { StackNavigator, TabNavigator } from 'react-navigation';

import Tab1 from './components/Tabs/Tab1';
import Tab2 from './components/Tabs/Tab2';
import Tab3 from './components/Tabs/Tab3';
import Profile from './components/Profile';
import Login from './components/Login';
import Chat from './components/Chats/Chat';

export const Tabs = TabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        tabBarLabel: 'Global Chat'
      }
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        tabBarLabel: 'Group Chat'
      }
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: {
        tabBarLabel: 'Profile'
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'black'
      },
      //activeTintColor: 'black',
      labelStyle: {
        fontSize: 13,
      },
      indicatorStyle: {
        backgroundColor: '#f50057'
      }
    }
  }
  
);

export const SignedOut = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: false
    }
  }
});

export const SignedIn = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: 'CETINGAN',
      headerTintColor: 'white',
      headerStyle: {
        elevation: 0,
        backgroundColor: 'black'
      }
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#f50057'
      }
    }
  },
  Chat: {
    screen: Chat,
    path: 'user/:item',
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.item.name}`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#f50057'
      }
    })
  }
});
