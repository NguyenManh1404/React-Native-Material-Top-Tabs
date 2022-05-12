import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; //Icon

const UserScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>UserScreen</Text>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('VideoScreen')}>
        <Icon name="youtube-tv" color="red" size={30} />
        <Text>GoTOVIDEO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
