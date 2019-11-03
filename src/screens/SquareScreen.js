import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COUNTER_INCREMENT = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === 'red' | 'green' | 'blue'
        // change === +10 | -10
        switch(color) {
            case 'red':
                red + COUNTER_INCREMENT > 255 || red + COUNTER_INCREMENT < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + COUNTER_INCREMENT > 255 || green + COUNTER_INCREMENT < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + COUNTER_INCREMENT > 255 || blue + COUNTER_INCREMENT < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounter 
                onIncrease={ () => setColor( 'red', COUNTER_INCREMENT ) }
                onDecrease={ () => setColor( 'red', -1 * COUNTER_INCREMENT ) }
                color="Red"/>
            <ColorCounter 
                onIncrease={ () => setColor( 'green', COUNTER_INCREMENT ) }
                onDecrease={ () => setColor( 'green', -1 * COUNTER_INCREMENT ) }
                color="Green"/>
            <ColorCounter 
                onIncrease={ () => setColor( 'blue', COUNTER_INCREMENT ) }
                onDecrease={ () => setColor( 'blue', -1 * COUNTER_INCREMENT ) }
                color="Blue" />
            <View style = {{ 
                width: 100,
                height: 100,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                alignSelf: 'center'
              }} 
            />
            <Text style={{ textAlign: "center" }}>
                {`rgb(${red}, ${green}, ${blue})`}
            </Text>
        </View>
    );
}
export default SquareScreen;
