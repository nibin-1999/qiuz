import React from 'react'
import { View, Text, } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Detail = () => {

	const Stack = createNativeStackNavigator();


	return (
		<View>
			<Text>Detail</Text>
		</View>
	)
}

export default Detail