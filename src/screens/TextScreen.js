import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.labelStyle}>Enter Name:</Text>
                <TextInput 
                    placeholder='Username'
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={newValue => setName(newValue)}
                />
                <Text>My name is {name}</Text>
            </View>
            <View style={styles.separater}></View>
            <View>
                <Text style={styles.labelStyle}>Enter Password:</Text>
                <TextInput 
                    placeholder='Password'
                    secureTextEntry
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={newValue => setPassword(newValue)}
                />
                {
                    password.length < 5 
                        ? <Text>Password must be longer than 5 characters</Text> 
                        : null
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    labelStyle: {
        fontSize: 16
,        fontWeight: '500'
    },  
    input: {
        marginVertical: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        elevation: 2,
    },
    separater: {
        marginVertical: 12
    }
});

export default TextScreen;