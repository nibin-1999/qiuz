import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/screens/Home'
import Detail from './src/components/screens/Detail'



const App = () => {


	const Stack = createNativeStackNavigator();

	return (

		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false,}} >
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Detail' component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;