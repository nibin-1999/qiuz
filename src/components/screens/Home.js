import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native'
import Carousel from 'react-native-snap-carousel';


import Search from '../../assets/icons/search.svg'

const {width, height} = Dimensions.get("screen")


const Home = ({navigation}) => {

        const category = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Branding' },
        { id: 3, name: 'Animation' },
        { id: 4, name: 'Website' },
        { id: 5, name: 'Trading' },
        { id: 6, name: 'Graphics' },
        { id: 7, name: 'UI Design' },
        { id: 8, name: 'Modeling' },
        ];

        const question =[
            {
                id:1, 
                title: "coffee or tea ?",
                image1: require("../../assets/images/coffee.jpg"),
                image2: require("../../assets/images/tea.jpg"),
            },
            {
                id:2, 
                title: "pizza or cake ?",
                image1: require("../../assets/images/pizza.jpg"),
                image2: require("../../assets/images/cake.jpg"),
            },
            {
                id:3, 
                title: "grape or berry ?",
                image1: require("../../assets/images/grape.webp"),
                image2: require("../../assets/images/berry.webp"),
            },
        ];
        

    const [active, setActive] = useState(1);
    const [selectedRounds, setSelectedRounds] = useState(Array(question.length).fill(null));

    
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
            <FlatList
                contentContainerStyle={styles.choiceContainer}
                data={question}
                renderItem={({ item, index }) => (
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', { item })}
                            style={styles.questionContainer}>
                                <Text style={styles.question}>{item.title}</Text>
                        </TouchableOpacity>
                        <View style={styles.questionImageContainer}>
                            <TouchableOpacity
                                style={styles.imageContainer}
                                onPress={() => {
                                const newSelectedRounds = [...selectedRounds];
                                newSelectedRounds[index] = 1;
                                setSelectedRounds(newSelectedRounds);
                                }}>
                                <Image style={styles.image} source={item.image1} />
                                <View style={selectedRounds[index] === 1 ? styles.roundContainerActive : styles.roundContainer}>
                                    <Text style={styles.roundText}>1</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.imageContainer}
                                onPress={() => {
                                const newSelectedRounds = [...selectedRounds];
                                newSelectedRounds[index] = 2;
                                setSelectedRounds(newSelectedRounds);
                                }}>
                                <Image style={styles.image} source={item.image2} />
                                <View style={selectedRounds[index] === 2 ? styles.roundContainerActive : styles.roundContainer}>
                                <Text style={styles.roundText}>2</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

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
    container: {
        width: '100%',
        height: 30,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      bar: {
        height: '100%',
        backgroundColor: '#4caf50',
      },
      text: {
        marginLeft: 10,
        color: '#000',
      },
      choiceContainer: {

      },
});
