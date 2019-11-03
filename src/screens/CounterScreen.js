import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button
              title='Increase'
              onPress={() => {
                setCounter(counter + 1);
              }}  
            />
            
            <Button
              title='Decrease'
              onPress={() => {
                setCounter(counter - 1);
              }}  
            />
            <Text>Current Counter: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {

    }
})

export default CounterScreen;