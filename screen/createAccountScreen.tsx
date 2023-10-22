import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccountScreen() {
  const navigation = useNavigation();

  const handleLinkPress = () => {
    const url = "https://www.example.com";
    Linking.openURL(url);
  };

  const handleBack = () => {
    navigation.navigate("LoginScreen");
  };

  const goScreen = () => {
    navigation.navigate("HomePage");
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleBack}>
          <Image
            style={{
              marginTop: 71,
              marginLeft: 29,
              width: 6,
              height: 12,
              // backgroundColor: 'red',
            }}
            source={require("../asset/Vector.png")}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.5,
          width: 354,
          height: 71,
          marginLeft: 30,
          alignSelf: "center",
          justifyContent: "center",
          // backgroundColor: 'red',
        }}
      >
        <Text style={styles.text1}>Create an account</Text>
        <Text style={styles.text2}>Invest and double your income now</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          justifyContent: "center",
          // backgroundColor: 'white',
        }}
      >
        <TextInput
          style={styles.inputFullName}
          placeholder="Full Name"
        ></TextInput>
        <TextInput style={styles.inputEmail} placeholder="Email"></TextInput>
        <TextInput
          style={styles.inputPassWord}
          secureTextEntry={true}
          placeholder="PassWord"
        ></TextInput>
      </View>
      <View style={{ alignSelf: "center" }}>
        <TouchableOpacity>
          <Button
            style={styles.createAccount}
            buttonStyle={{
              flex: 1,
              borderRadius: 50,
              backgroundColor: "#32A062",
            }}
            onPress={goScreen}
            title={"Creat Acount"}
          ></Button>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleLinkPress}
        style={{ backgroundColor: "white", flex: 1 }}
      >
        <Text
          style={{
            color: "#32A062",
            textDecorationLine: "underline",
            alignSelf: "center",
            fontSize: 17,
            marginTop: 44,
          }}
        >
          Already have an account?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: ' red',
  },
  text1: {
    fontSize: 34,
    fontWeight: "bold",
    alignSelf: "center",
  },
  text2: {
    fontSize: 17,
    alignSelf: "center",
  },
  inputFullName: {
    borderRadius: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    paddingHorizontal: 20,
    marginHorizontal: 30,
    width: 343,
    height: 60,
  },
  inputEmail: {
    borderRadius: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    paddingHorizontal: 20,
    marginHorizontal: 30,
    marginTop: 18,
    width: 343,
    height: 60,
  },
  inputPassWord: {
    borderRadius: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    paddingHorizontal: 20,
    marginHorizontal: 30,
    marginTop: 18,
    width: 343,
    height: 60,
  },
  createAccount: {
    fontWeight: "bold",
    height: 60,
    width: 343,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "#32A062",
    textAlign: "center",
  },
});
