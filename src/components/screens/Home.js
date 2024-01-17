import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'

import Search from '../../assets/icons/search.svg'

const {width, height} = Dimensions.get("screen")



const Home = () => {

   const  category =[
        {
            id:1,
            name: "All"
        },
        {
            id:2,
            name: "Branding"
        },
        {
            id:3,
            name: "Animation"
        },
        {
            id:4,
            name: "Website"
        },
        {
            id:5,
            name: "Trading"
        },
        {
            id:6,
            name: "Gaphics"
        },
        {
            id:7,
            name: "UI Design"
        },
        {
            id:8,
            name: "Modeling"
        },
    ]

    const question = [
        {
            id:1,
            image: '../../assets/images/coffee.jpg'
        },
        {
            id: 2,
            image: '../../assets/images/tea.jpg'
        }
    ]

    const [active,setActive]=useState(0)

    return (
        <SafeAreaView style={styles.mainContainer} >

            <View style={styles.topContainer} >
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require("../../assets/icons/Logo-p.png")} />
                    </View>
                    <TouchableOpacity style={styles.searchContainer}>
                        <Search width={35} height={35} />
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                    <FlatList
                        style={styles.categoryItems}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={category}
                        renderItem={({item})=>(
                            <TouchableOpacity onPress={()=> 
                                setActive(item.id)} 
                                style={active==item.id?styles.categoryButtonActive:styles.categoryButton}>
                                <Text style={active==item.id?styles.categoryTextActive:styles.categoryText}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.questionContainer}>
                    <Text style={styles.question}>which one is cleaner preview?</Text>
                </TouchableOpacity>
                <View>
                    <View  style={styles.questionImageContainer}>

                        <TouchableOpacity style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../../assets/images/coffee.jpg')} />
                            <View style={styles.roundContainer}>
                                <Text style={styles.roundText}>1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../../assets/images/tea.jpg')} />
                            <View style={styles.roundContainer}>
                                <Text style={styles.roundText}>2</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View></View>
                    </View>
                </View>
                <View>
                    <TextInput />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;


const styles = StyleSheet.create({

    mainContainer: {
        height,
        width,
        backgroundColor: '#e8e8e8'
    },
    topContainer:{
        marginBottom:100,
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:30,
        marginLeft:30,
    },
    logoContainer: {
        marginRight:130,
    },
    searchContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius:50,
    },
    categoryItems: {
        marginLeft: 30,
    },
    categoryButton: {
        backgroundColor: '#fff',
        padding: 13,
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center',
        marginRight:10,
    },
    categoryButtonActive: {
        backgroundColor: '#000',
        padding: 13,
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center',
        marginRight:10,
    },
    categoryText: {
        fontFamily:'Inter-Medium',
        color: '#A6A6A6',
        fontSize:16,
    },
    categoryTextActive: {
        fontFamily:'Inter-Medium',
        color: '#fff',
        fontSize:16,
        fontWeight:'bold',
    },


    bottomContainer:{
        backgroundColor: '#fff',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius:15,
    },
    questionContainer:{
        padding:15,
    },
    question: { 
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',

    },
    questionImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 10,

    },
    imageContainer: {
        paddingHorizontal: 10,
    },
    image: {
        height: 140,
        width: 140,
        borderRadius: 10,
    },
    roundContainer: {
        height: 30,
        width: 30,
        backgroundColor: '#b7b5b5',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 17,
        top: 5,
    },
    roundContainerActive: {
        height: 30,
        width: 30,
        backgroundColor: '#355FFE',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 17,
        top: 5,
    },
    roundText: {
        color: '#fff',
        fontSize: 12,

    },
});

// style={active==item.id?styles.categoryButtonActive:styles.categoryButton}>