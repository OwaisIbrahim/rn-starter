import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COUNTER_INCREMENT = 15;

const reducer = (state, action) => {
    // state = { red:number, green:number, blue:number };
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

    switch(action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state
            : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch /* runMyReducer */] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={ () => dispatch({ colorToChange: 'red', amount: COUNTER_INCREMENT }) }
                onDecrease={ () => dispatch({ colorToChange: 'red', amount: -1 * COUNTER_INCREMENT }) }
                color="Red"/>
            <ColorCounter 
                onIncrease={ () => dispatch({ colorToChange: 'green', amount: COUNTER_INCREMENT }) }
                onDecrease={ () => dispatch({ colorToChange: 'green', amount: -1 * COUNTER_INCREMENT }) }
                color="Green"/>
            <ColorCounter 
                onIncrease={ () => dispatch({ colorToChange: 'blue', amount: COUNTER_INCREMENT }) }
                onDecrease={ () => dispatch({ colorToChange: 'blue', amount: -1 * COUNTER_INCREMENT }) }
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
