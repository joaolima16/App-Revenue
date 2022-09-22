import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Provider } from 'react-redux';
import Categorias from "./pages/Categorias";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login  from './pages/Login';
import CamPage from './pages/CamPage';
import ImageSelectorPage from './pages/ImageSelectorPage';
import PreviewPage from './pages/PreviewPage';
import store from './store';
import Register from './pages/Register';
import NewRecipes from './pages/NewRecipes';
<<<<<<< HEAD
=======
import Confirmation from './pages/Confirmation';
>>>>>>> main

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  const NavigationRef = useNavigationContainerRef();

  function HomePage(){
    return(
      <>
        <Header navigation={NavigationRef} />
        <Tab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: "#FFCBDB" },
            tabBarIndicatorStyle: { color: "#fff" },
            tabBarActiveTintColor: "#fff",
          }}>
          <Tab.Screen options={{
              title: ({ focused }) => (
                <FontAwesome size={25}
                  name="home"
                  color={focused ? "#fff" : "black"}
                />)
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen options={{
              title: ({ focused }) => (
                <MaterialCommunityIcons size={25}
                  name="cupcake"
                  color={focused ? "#fff" : "black"}
                />),
            }}
            name="Categorias"
            component={Categorias}
          />
        </Tab.Navigator>
      </>
    );
  };
  
  return (
    <Provider store={store}>
      <NavigationContainer ref={NavigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="NewRecipe"component={NewRecipes}/>
          <Stack.Screen name="ImageSelector" component={ImageSelectorPage} />
          <Stack.Screen name="Cam" component={CamPage} />
          <Stack.Screen name="Preview" component={PreviewPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};