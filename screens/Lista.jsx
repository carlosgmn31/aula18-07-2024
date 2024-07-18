import { View } from "react-native-web";
import Contato from "../api/Contato";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";



const Lista = ({navigation}) => {
  const [list, setList] = useState([])
  const editarContato = (contato) => {
        
    navigation.navigate('EditarContato', contato);

}


const isFocused = useIsFocused(); // Determina se a tela está em foco ou não

  useEffect(() => {
    const carregarContatos = async () => {
      try {
        const response = await Contato.getContato();
        console.log(response.status);
        setList(response.data);
      } catch (error) {
        console.warn(error);
      }
    };

    if (isFocused) {
      carregarContatos(); // Chama a função para carregar os contatos apenas quando a tela estiver em foco
    }
  }, [isFocused]); // Dependência: isFocused


    return (
        
  <View style={{flex: 1, flexDirection: 'column', alignItems:"fix", justifyContent:'top', backgroundColor:"#E6DDD7"}} >
 <ScrollView>
 {
                    list.map((l, i) => (
                        <TouchableOpacity key={i} onPress={()=>navigation.navigate(editarContato(l))}>
                            <ListItem bottomDivider>
                            <Avatar 
                                size={'small'}
                                  rounded
                                  source={{
                                    uri:
                                      '../assets/contato.png',
                                  } }
                                />
                               <ListItem.Content>
                                    <ListItem.Title>{l.nome}</ListItem.Title>
                                    <ListItem.Subtitle>{l.numero}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    ))
                }
                </ScrollView>
  </View>
    );
    };
    
export default Lista;