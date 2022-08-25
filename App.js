import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Provider } from 'react-redux';
import CamPage from './pages/CamPage';
import PreviewPage from './pages/PreviewPage';
import store from './store';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Cam" component={CamPage} />
          <Stack.Screen name="Preview" component={PreviewPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};