import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Avatar, Input, ListItem } from 'react-native-elements';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

const telaPedaco = ScreenWidth *0.8

const handlePress = () => {
  navigation.navigate('Cadastro');
  
};

export const Contato = ({nome,numero,navigation}) => {
  return (
         <View style={{alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}} >
<ListItem bottomDivider onPress={() => handlePress()}>
<Avatar 
  size={'small'}
    rounded
    source={{
      uri:
        '../assets/contato.png',
    } }
  />
    <ListItem.Content style={{width:telaPedaco}} >
      <ListItem.Title>{nome}</ListItem.Title>
      <ListItem.Subtitle>{numero}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
    </View>
  )
}
