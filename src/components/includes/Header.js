import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList,  } from 'react-native'
import { React,useState } from 'react';

import Search from '../../assets/icons/search.svg';

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

const Header = () => {

    const [active, setActive] = useState(1);

    
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View>
                    <Image source={require('../../assets/icons/Logo-p.png')} />
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.searchContainer}>
                    <Search width={35} height={35} />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    style={styles.categoryItems}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={category}
                    renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setActive(item.id)}
                        style={active == item.id ? styles.categoryButtonActive : styles.categoryButton}>
                        <Text style={active == item.id ? styles.categoryTextActive : styles.categoryText}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default Header;



const styles = StyleSheet.create({

    mainContainer:{
        marginBottom:100,
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:30,
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
});