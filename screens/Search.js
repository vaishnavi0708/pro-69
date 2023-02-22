import React, {Component} from "react";
import {View,Text,StyleSheet} from 'react-native';

export default class SearchScreen extends Component{
render(){
    return(
        <View style = {styles.container}   >
        <Text style = {styles.textStyle}>
            this is my search screen
        </Text>
      </View> 

    )
}

}

const styles = StyleSheet.create({
    container: {
        flex:1,
      alignItems: 'center',
      justifyContent: 'center',
     backgroundColor: '#5653D4',
    },
    textStyle: {
      color: 'white',
      fontSize: 25,
    },
  });
  



