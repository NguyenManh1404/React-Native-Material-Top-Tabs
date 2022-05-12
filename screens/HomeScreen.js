import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // import Icon
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreens</Text>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('UserScreen')}>
        <Icon name="user" color="red" size={40} />
        <Text>GOTOUSER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
