import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Input } from 'react-native-elements';

export const InputComponent = ({label}) => {
  return (
    <View >
        <Text style={{paddingLeft:10, fontSize: 20}} >{label}</Text>
        <Input inputContainerStyle={{width:250,alignSelf:"center"}}  style={styles.styleInput}/>
    </View>
  )
}

    
const styles = StyleSheet.create({
    styleInput: {
    flex: 1,
    marginTop: 3,
    paddingLeft: 5,
    backgroundColor: "#FFF"
    },
    });
    