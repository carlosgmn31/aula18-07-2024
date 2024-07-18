import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";


const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle:{backgroundColor:'#3C6EF4'},
        headerTitleAlign:"center",
        headerTitleStyle:{color:"#ffffff"},
        headerShown: true,
        headerTintColor: "#ffffff" 
      }}>
<Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
</Stack.Navigator>
</NavigationContainer>

);
}

export default App;


const styles = StyleSheet.create({
  stylesGlobal: {
  flex: 1,
  padding: 20,
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
},
  });