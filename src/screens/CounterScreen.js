import React, { useReducer } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }

  switch(action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload};
    case 'decrement':
      return { ...state, count: state.count - action.payload};
    default:
      return state;
  }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;
    return (
        <View>
            <Button
              title='Increase'
              onPress={() => {
                dispatch({type: 'increment', payload: COUNTER_INCREMENT});
              }}  
            />
            
            <Button
              title='Decrease'
              onPress={() => {
                dispatch({type: 'decrement', payload: COUNTER_INCREMENT});
              }}  
            />
            <Text>Current Counter: {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {

    }
})

export default CounterScreen;