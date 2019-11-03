import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
            borderWidth: 3,
            borderColor: 'black',
            height: 200,
        },
        textOneStyle: {
            backgroundColor: 'red', 
            padding: 5
        },
        
        textThreeStyle: {
            backgroundColor: 'green', 
            padding: 5 
        }
    // viewStyle: {
    //     borderWidth: 3,
    //     borderColor: 'black',
    //     flexDirection: 'row',
    //     height: 200,
    //     alignItems: 'center',
    //     justifyContent: 'flex-end'
    // },
    // textStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red', 
    // }
});

export default BoxScreen;