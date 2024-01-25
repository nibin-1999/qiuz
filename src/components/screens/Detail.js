import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import { useNavigation } from '@react-navigation/native'; 

import ArrowIcon from '../../assets/icons/Arrow.svg';
import MenuIcon from '../../assets/icons/Menu.svg';

import Choice from '../includes/Choice'
import Think from '../includes/Think'
import CommentCard from '../includes/CommentCard';

const Detail = ({item, index}) => {

    const navigation = useNavigation(); 
	
	return (
		<View style={styles.mainContainer}>
			<View style={styles.headerContainer}>
				<TouchableOpacity activeOpacity={0.5} style={styles.iconContainer}>
					<ArrowIcon 
						width={25} 
						height={25} 
						onPress={() => navigation.navigate('Home')}
					/>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.5} style={styles.iconContainer}>
					<MenuIcon width={25} height={25} />
				</TouchableOpacity>
			</View>
			<View style={styles.bottomContainer}>
				<Choice/>
				<CommentCard />
				<View style={styles.think}>
					<Think />
				</View>
			</View>
		</View>
	)
}

export default Detail;

const styles = StyleSheet.create({

	
    mainContainer: {
        height: '100%',
        width:'100%',
        backgroundColor: '#fff',
    },
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 30,
		paddingTop: 30,
		paddingBottom: 10

	},
	iconContainer: {
		backgroundColor: '#e8e8e8',
        padding: 15,
        borderRadius:50,
	},
	bottomContainer: {
		paddingHorizontal: 10,

	},
	think: {
		marginTop: 50,
	}
});