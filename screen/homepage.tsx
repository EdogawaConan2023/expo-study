import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Test from './view/test';
import {Tab} from 'react-native-elements/dist/tab/Tab';

export default function Homepage() {
  const navigation = useNavigation();

  const handleLinkPress = () => {
    // Thực hiện xử lý khi người dùng nhấn vào "See All"
    // Ví dụ: chuyển hướng đến trang danh sách kế hoạch đầu tư
    // navigation.navigate('PlanListScreen');
  };

  const handleInvestNow = () => {
    // Thực hiện xử lý khi người dùng nhấn vào "Invest Now"
    // Ví dụ: chuyển hướng đến trang đầu tư
    // navigation.navigate('InvestmentScreen');
  };

  const handleBack = () => {
    navigation.navigate('CreateAccountScreen');
  };

  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.text1}>Welcome, Jessie.</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleBack}>
          <Image
            style={{
              marginLeft: 29,
              width: 6,
              height: 12,
              // backgroundColor: 'red',
            }}
            source={require('../asset/Vector.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#30A078',
          width: 354,
          height: 125,
          marginTop: 34,
          borderRadius: 20,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.text2}>Your total asset portfolio</Text>
        <Text style={styles.text3}>N203,935</Text>
        <Button
          title="Invest Now"
          buttonStyle={{
            backgroundColor: 'white',
            marginLeft: 219,
            marginBottom: 22,
            width: 125,
            height: 40,
            borderRadius: 15,
          }}
          titleStyle={{
            fontSize: 14,
            color: '#30A078',
            fontWeight: 'bold',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // backgroundColor: 'white',
          marginTop: 40,
          marginLeft: 30,
        }}>
        <Text style={styles.text4}>Best Plans</Text>
        <TouchableOpacity
          onPress={handleLinkPress}
          style={{backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'red',
              fontSize: 18,
              // backgroundColor: 'yellow',
              marginRight: 30,
            }}>
            See All →
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            marginLeft: 30,
            borderRadius: 20,
          }}>
          <Image
            style={{width: 134, height: 170}}
            source={require('../asset/Cardstock01.png')}></Image>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            marginLeft: 20,
            borderRadius: 20,
          }}>
          <Image
            style={{width: 134, height: 170}}
            source={require('../asset/Cardstock02.png')}></Image>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            marginLeft: 20,
            borderRadius: 20,
          }}>
          <Image
            style={{width: 67, height: 170}}
            source={require('../asset/Cardstock03.png')}></Image>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginLeft: 30,
            marginTop: 40,
          }}>
          Investment Guide
        </Text>
        <Test></Test>
        <Tab.Item
          title="Recent"
          titleStyle={{fontSize: 12}}
          icon={{name: 'timer', type: 'ionicon', color: 'white'}}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{fontSize: 12}}
          icon={{name: 'heart', type: 'ionicon', color: 'white'}}
        />
        <Tab.Item
          title="cart"
          titleStyle={{fontSize: 12}}
          icon={{name: 'cart', type: 'ionicon', color: 'white'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    backgroundColor: 'white',
    fontSize: 34,
    marginTop: 103,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 16,
    color: 'white',
  },
  text3: {
    marginTop: 11,
    marginLeft: 30,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  text4: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
