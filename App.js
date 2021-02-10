import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Read from "./screens/Read";
import Write from "./screens/Write";
import Login from "./screens/Login";
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
         <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: Write},
  Read: {screen: Read}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./pencil.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require(".book.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
  Login: {screen: Login},
  TabNavigator:{screen: TabNavigator}
  })
  
const AppContainer =  createAppContainer(switchNavigator);
  