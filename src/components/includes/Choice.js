import  { React,useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal,  } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Carousel from 'react-native-snap-carousel';

import Close from '../../assets/icons/Close.svg'

const Choice = () => {
    const navigation = useNavigation(); 

    const [selectedRounds, setSelectedRounds] = useState([]);
    const [popup, setPopup] = useState(false);
    const [percentage, setPercentage] = useState(false);


    const questions = [
        {
        id: 1,
        title: 'coffee or tea ?',
        image1: require('../../assets/images/coffee.jpg'),
        image2: require('../../assets/images/tea.jpg'),
        },
        {
        id: 2,
        title: 'pizza or cake ?',
        image1: require('../../assets/images/pizza.jpg'),
        image2: require('../../assets/images/cake.jpg'),
        },
        {
        id: 3,
        title: 'grape or berry ?',
        image1: require('../../assets/images/grape.webp'),
        image2: require('../../assets/images/berry.webp'),
        },
        {
        id: 4,
        title: 'sports or arts ?',
        image1: require('../../assets/images/sports.webp'),
        image2: require('../../assets/images/arts.jpg'),
        },
    ];

    

    const snapItem = ({ item, index }) => {
        return (
            <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Detail', { item, index })}
                        style={styles.questionContainer}>
                        <Text style={styles.question}>{item.title}</Text>
                    </TouchableOpacity>
                    <View style={styles.questionImageContainer}>
                        <TouchableOpacity
                        activeOpacity={0.5}
                            style={styles.imageContainer}
                            onPress={() => {
                        
                            const newSelectedRounds = [...selectedRounds];
                            newSelectedRounds[index] = 1;
                            setSelectedRounds(newSelectedRounds);
                            setPercentage(!percentage)
                            setTimeout(() => {
                                setPopup(true) 
                            }, 2000);
                            }}>
                            <Image style={styles.image} source={item.image1} />
                            <View
                                style={
                                    selectedRounds[index] === 1
                                    ? styles.roundContainerActive
                                    : styles.roundContainer
                                }>
                                <Text style={styles.roundText}>1</Text>
                            </View>
                        </TouchableOpacity>
                        <Modal 
                            transparent= {true}
                            visible={popup}>
                                <View style={styles.modalMainContainer}>
                                    <View style={styles.modalContainer}>
                                        <TouchableOpacity activeOpacity={0.5} onPress={()=> setPopup(false)} style={styles.close}>
                                            <Close height={30} width={30} />
                                        </TouchableOpacity>
                                        <View style={styles.Container}>
                                            <Image style={styles.logoimage} source={require('../../assets/icons/popup.png')} />
                                        </View>
                                        <View  style={styles.textContainer}>
                                            <Text style={styles.titleText}>You got 5 points from answering the question</Text>
                                            <Text style={styles.descriptionText}>keep answering questions and earn points for asking later</Text>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.5} style={styles.buttonContainer} onPress={() =>setPopup(false)}>
                                            <Text style={styles.buttonText}>Back to home</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        </Modal>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.imageContainer}
                            onPress={() => {
                            const newSelectedRounds = [...selectedRounds];
                            newSelectedRounds[index] = 2;
                            setSelectedRounds(newSelectedRounds);setPercentage(!percentage)
                            setTimeout(() => {
                                setPopup(true) 
                            }, 2000);
                            }}>
                            <Image style={styles.image} source={item.image2} />
                            <View
                                style={
                                    selectedRounds[index] === 2
                                    ? styles.roundContainerActive
                                    : styles.roundContainer
                                }>
                                <Text style={styles.roundText}>2</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={ percentage==true ? styles.percentageContainer: styles.percentageContainerInactive }>
                            <View style={styles.leftPercentage}>
                                <Text style={styles.leftPercentageText}>65%</Text>
                            </View>
                            <View style={styles.rightPercentage}>
                                <Text style={styles.rightPercentageText}>35%</Text>
                            </View>
                    </View>
                                    
            </View>
        );
    }

    


    return (
        <View style={styles.carousel}>
            <Carousel
                data={questions}
                renderItem={snapItem}
                style={styles.choiceContainer}
                sliderWidth={400}
                itemWidth={400}
                windowSize={5}
            />
        </View>
    );
};

export default Choice;



const styles = StyleSheet.create({

    bottomContainer:{
        width: '73%',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        marginHorizontal: '5%',
        borderRadius:15,
        marginBottom:15,
    },
    questionContainer:{
        padding:15,
        alignSelf: 'center'
    },
    question: { 
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',

    },
    questionImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginTop: 10,
        width:'75%',


    },
    imageContainer: {
        // paddingHorizontal: 10,
        justifyContent: 'space-between',
        width:'70%',

    },
    image: {
        height: 120,
        width: 120,
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
  
    choiceContainer: {
        height: 340,
        width: '100%',
        overflow: 'hidden',
    },
    percentageContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#e8e8e8',
        borderRadius: 10,
        height: 35,
        width: '95%',
    },
    percentageContainerInactive:{
        display: 'none'
    },
    leftPercentage: {
        height: 35,
        width: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#355FFE',
        borderRadius: 10,
    },
    rightPercentage: {
        height: 35,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8e8e8',
        borderRadius: 10,
    },
    leftPercentageText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    rightPercentageText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#355FFE'
    },
    carousel:{
        width: '60%',
        // marginHorizontal: '10%',
    },

    modalMainContainer: {
        backgroundColor: '#000000aa',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainer: {
        backgroundColor: '#fff',
        margin: 50,
        padding: 25,
        borderRadius: 10,
    },
    close: {
        height: 10,
        alignSelf: 'flex-end',
        marginBottom: 50
    },
    Container: {
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
    },
    logoimage: {
        height: 100,
        width: 100,
    },
    titleText: {
        fontSize:18,
        fontWeight:'bold',
        color: '#000',
        alignContent: 'center',
        marginBottom: 8,
        textAlign: 'center'
    },
    descriptionText: {
        fontSize: 12,
        fontWeight:'bold',
        marginHorizontal: 30,
        textAlign: 'center'
       
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginHorizontal: 40,
        backgroundColor: '#355FFE',
        borderRadius:10,
    },
    buttonText: {
        color: '#fff',
        fontSize:12,

    },
});