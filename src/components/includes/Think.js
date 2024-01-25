import { View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import {React, useState} from 'react'

import SendIcon from '../../assets/icons/Send.svg';


const Think = () => {

    
    const [textInputValue, setTextInputValue] = useState('');

    const handleSendButtonPress = () => {
        console.log('Text Input Value:', textInputValue);
        setTextInputValue('');
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Share your think"
                        value={textInputValue}
                        onChangeText={setTextInputValue}
                    />
                </View>
                    <TouchableOpacity
                       activeOpacity={0.5}
                        style={styles.iconContainer}
                        onPress={handleSendButtonPress}>
                        <SendIcon width={20} height={20} />
                    </TouchableOpacity>
            </View>
        </View>
    );
};

export default Think;


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        alignItems: 'center',
        
    },

    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        borderRadius: 10,
        height: 50,
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    iconContainer: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 4,
    },
    textInput: {
        fontSize:12,
        color: '#bfbfbf',
        fontWeight: 'bold',
        width: '105%'
    },

});


