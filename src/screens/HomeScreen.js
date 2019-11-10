import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log();
  return (
    <View>
      <Button 
        onPress={() => navigation.navigate('Component')}
        title='Go to Component Screen'
        />
        <Button 
        onPress={() => navigation.navigate('List')}
        title='Go to List Screen'
        />
        <Button 
        onPress={() => navigation.navigate('Image')}
        title='Go to Image Screen'
        />
        <Button 
        onPress={() => navigation.navigate('Box')}
        title='Go to Box Screen'
        />
        <Button 
          onPress={() => navigation.navigate('Counter')}
          title='Go to Counter Screen'
        />
        <Button 
          onPress={() => navigation.navigate('Color')}
          title='Go to Color Screen'
        />
        <Button 
          onPress={() => navigation.navigate('Square')}
          title='Go to Square Screen'
        />
        
        <Button 
          onPress={() => navigation.navigate('Text')}
          title='Go to Text Demo'
        />
      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

// HomeScreen.navigationOptions = {
//   headerTitle: ( /* Your custom header */
//     <View
//       style={{
//         height: 60,
//         marginTop: 20 /* only for IOS to give StatusBar Space */
//       }}
//     >
//       <Text>Hello</Text>
//     </View>
//   )
// }

export default HomeScreen;
