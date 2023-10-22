import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Image, View, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';

const LoginScreen = () => {
  const navigation = useNavigation();
  const click = () => {
    navigation.navigate('CreateAccountScreen');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
        <Image
          style={styles.image}
          source={require('../asset/background1.png')}
        />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignSelf: 'center',
            marginRight: 41,
            marginLeft: 19,
          }}>
          <Text style={styles.text}>Stay on top of your finance with us.</Text>
          <Text style={styles.text1}>
            We are your new financial Advisors to recommend the best investments
            for you.
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Button
            style={styles.createAccount}
            buttonStyle={{
              borderRadius: 50,
              backgroundColor: '#32A062',
            }}
            onPress={click}
            title={'Create Account'}></Button>
          <Button
            titleStyle={{color: '#32A062'}}
            title={'Login'}
            buttonStyle={{
              backgroundColor: 'transparent', // màu nền trong suốt
            }}></Button>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    // backgroundColor : "red"
  },
  image: {
    borderRadius: 100,
    alignContent: 'center',
  },
  text: {
    flex: 1.5,
    fontWeight: 'bold',
    fontSize: 34,
    textAlign: 'center',
  },
  text1: {
    flex: 1,
    fontSize: 17,
    textAlign: 'center',
  },
  createAccount: {
    marginRight: 60,
    marginLeft: 60,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  login: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default LoginScreen;
