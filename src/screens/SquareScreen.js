import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COUNTER_INCREMENT = 15;

const reducer = (state, action) => {
    // state = { red:number, green:number, blue:number };
    // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

    switch(action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
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
                onIncrease={ () => dispatch({ type: 'change_red', payload: COUNTER_INCREMENT }) }
                onDecrease={ () => dispatch({ type: 'change_red', payload: -1 * COUNTER_INCREMENT }) }
                color="Red"/>
            <ColorCounter 
                onIncrease={ () => dispatch({ type: 'change_green', payload: COUNTER_INCREMENT }) }
                onDecrease={ () => dispatch({ type: 'change_green', payload: -1 * COUNTER_INCREMENT }) }
                color="Green"/>
            <ColorCounter 
                onIncrease={ () => dispatch({ type: 'change_blue', payload: COUNTER_INCREMENT }) }
                onDecrease={ () => dispatch({ type: 'change_blue', payload: -1 * COUNTER_INCREMENT }) }
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
