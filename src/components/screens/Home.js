import React from 'react';
import { SafeAreaView, StyleSheet,View,Dimensions } from 'react-native';

import Header from '../includes/Header';
import Choice from '../includes/Choice';
import Think from '../includes/Think';



const Home = () => {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header />
			<View style={styles.bottom} >
				<Choice />
				<Think />
			</View>
		</SafeAreaView>
	);
};



export default Home;

const styles = StyleSheet.create({

	
    mainContainer: {
        height: '100%',
        width:'100%',
        backgroundColor: '#e8e8e8'
    },
	bottom: {
		backgroundColor: '#fff',
		borderRadius: 15,
		marginHorizontal: "10%",
		width: "80%",
	},
});
