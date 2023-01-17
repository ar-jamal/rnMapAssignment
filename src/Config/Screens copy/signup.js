import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import cusColors from '../../Utils/colors';
import CusButton from '../Components/cusButton';
import CusTextInput from '../Components/cusTextInput';

export default function Signup({navigation}) {
  const [inputText, setInputText] = useState({});
  // const [filledForm, setFilledForm] = useState([]);
  const [index, setIndex] = useState('');

  async function addHandler() {
    try {
      const res = await auth().createUserWithEmailAndPassword(
        inputText.email,
        inputText.passowrd,
      );
      // .then(userCredential => {
      // console.log(userCredential);
      console.log('User account created & signed in!');
      const userId = res.user.uid;
      await database().ref(`users/${userId}`).set(inputText);
      // .then(success => {
      //   console.log(success);
      navigation.navigate('Home', inputText.userName);
      // });
      // })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    }
    // console.log(inputText);
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Signup</Text>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.inputView}>
          <ScrollView>
            <CusTextInput
              label="user name"
              labelColor="lightgreen"
              onChangeText={e => setInputText({...inputText, userName: e})}
              value={inputText.userName || ' '}
              onDelete={() => setInputText(delete inputText.userName)}
            />
            <CusTextInput
              label="email"
              labelColor="lightgreen"
              onChangeText={e => setInputText({...inputText, email: e})}
              value={inputText.email || ' '}
              onDelete={() => setInputText(delete inputText.email)}
            />
            <CusTextInput
              label="password"
              labelColor="lightgreen"
              onChangeText={e => setInputText({...inputText, passowrd: e})}
              value={inputText.password || ' '}
              onDelete={() => setInputText(delete inputText.passowrd)}
            />
          </ScrollView>
        </View>
        <CusButton
          title="Submit"
          style={{
            backgroundColor: 'lightgreen',
            color: '#071e30',
            width: '30%',
          }}
          styleChild={{color: '#071e30'}}
          onPress={addHandler}
          keyboardType="password"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    maxHeight: '100%',
    flex: 1,
    opacity: 0.88,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#071e30',
  },
  headerView: {
    height: '15%',
    minHeight: '1%',
    alignText: 'center',
    justifyContent: 'center',
    // marginVertical: '5%',
    // backgroundColor: "yellow",
  },
  headerText: {
    fontSize: 35,
    color: 'lightgreen',
  },
  bodyView: {
    width: '100%',
    maxHeight: '88%',
    alignItems: 'center',
  },
  inputView: {
    width: '60%',
    height: 230,
  },

  // linkText: {
  //   width: 80,
  //   fontWeight: '600',
  //   borderBottomWidth: 1.7,
  //   fontSize: 12,
  //   marginTop: 8,
  //   alignSelf: 'flex-end',
  //   color: cusColors.lightYellow,
  //   borderBottomColor: 'black',
  // },
  // loginOptions: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   height: '12%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 1,
  //   borderColor: cusColors.lightYellow,
  //   borderBottomLeftRadius: 70,
  //   backgroundColor: cusColors.onyxBlack,
  // },
  // text: {
  //   color: cusColors.lightYellow,
  //   height: 20,
  //   marginRight: 10,
  // },
});
