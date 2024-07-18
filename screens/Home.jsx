import * as ImagePicker from 'expo-image-picker';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getStorage, list, ref, uploadBytes } from "firebase/storage";
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native-elements";



const Home = () => {
    const [alertVisivel, setAlertVisivel] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState([null]);
    const [visible, setVisible] = useState(false);

    const firebaseConfig = {
      apiKey: "AIzaSyDqHPm3NdXYHdftVcGMYFfaajoKVSvVSNc",
      authDomain: "aula-app-19734.firebaseapp.com",
      projectId: "aula-app-19734",
      storageBucket: "aula-app-19734.appspot.com",
      messagingSenderId: "1082925922711",
      appId: "1:1082925922711:web:98b2765d913916c1acecd2",
      measurementId: "G-JX9X4JJ6Q8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
    //Armazenando a imagem para o upload
    const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
      
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
      });
      
      if (!result.cancelled) {
      
      setImageUri(result.uri);
      console.log(result.assets);
      
      }
      };
      
      function getRandom(max) {
      return Math.floor(Math.random() * max + 1)
      }
    //Método para armazenar a imagem para upload

    const uploadImage = async () => {
      if (!imageUri) {
      Alert.alert('Selecione uma imagem antes de enviar.');
      return;
      }
      
      // Create a root reference
      const storage = getStorage();
      
      // Create a reference to 'mountains.jpg'
      const mountainsRef = ref(storage, 'imagem2.jpg');
      
      const response = await fetch(imageUri);
      const blob = await response.blob();
      
      uploadBytes(mountainsRef, blob).then((snapshot) => {
      console.log(snapshot);
      alert('Imagem enviada com sucesso!!');
      });
      };
    //Listar no console as imagens salvas no storage
    async function LinkImage() {
      // Create a reference under which you want to list
      const storage = getStorage();
      const listRef = ref(storage);
      
      // Fetch the first page of 100.
      const firstPage = await list(listRef, { maxResults: 100 });
      var lista = [];
      firstPage.items.map((item) => {
      
      var link = ('https://firebasestorage.googleapis.com/v0/b/' +
      item.bucket + '/o/' + item.fullPath + '?alt=media');
      lista.push(link);
      
      })
      setImage(lista);
      setVisible(true);
      console.log(image);
      }
      
      const renderItem = ({ item }) => (
      <View style={styles.item}>
      <Text style={styles.title}>{item.link}</Text>
      </View>
      );
    
    
    return (
  <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"top", backgroundColor:"#E6DDD7",paddingTop:20}}  >
<Button
style={{padding:10,width:180}} buttonStyle={{backgroundColor:'green',borderRadius: 10}}
  title="Enviar"
/>
{image ? (
      <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
      />
    ) : (
      <Image
      PlaceholderContent="insira uma imagem"
      style={{ width: 200, height: 200 }}
    />
    )}
<Button 
style={{padding:10,width:180}} buttonStyle={{backgroundColor:'green',borderRadius: 10}}
  title="Escolher imagem"
/>

<View style={{ flex: 1, alignItems: 'center'

, justifyContent: 'center' }}>

<Button title="Escolher Imagem" onPress={pickImage} />
{imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height:
200, marginVertical: 20 }} />}
{uploading ? (
<ActivityIndicator size="large" color="#0000ff" />
) : (
<View> <Button title="Enviar Imagem" onPress={uploadImage} disabled=
{!imageUri} /></View>

)}
<View><Button title="Ver Imagens" onPress={LinkImage} /></View>
<FlatList
data={image}
keyExtractor={(item, index) => index.toString()}
renderItem={({ item }) => (
<View style={{ marginBottom: 20, alignItems: 'center' }}>
<Image source={{ uri: item }} style={{ width: 50, height: 50 }} />
</View>
)}
/>

</View>
  </View>
    );
    };
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    }
    });
    
export default Home;
    