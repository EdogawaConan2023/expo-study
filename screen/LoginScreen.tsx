import React from 'react';
import {Image, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './login';

export default function LoginScreen({navigation}): React.JSX.Element {
  const handleCreateAccountPress = () => {
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
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Button
            style={styles.createAccount}
            buttonStyle={{
              borderRadius: 50,
            }}
            onPress={handleCreateAccountPress}
            title={'Create Account'}></Button>

          <Button
            titleStyle={{color: 'black'}}
            title={'Login'}
            buttonStyle={{
              backgroundColor: 'white',
            }}></Button>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
}
