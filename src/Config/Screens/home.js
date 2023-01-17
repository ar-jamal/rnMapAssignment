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
import MapView from 'react-native-maps';

// import cusColors from '../../Utils/colors';
// import CusBuÏtton from '../Components/cusButton';
// import CusTextInput from '../Components/cusTextInput';

export default function Home() {
  const [inputText, setInputText] = useState({});
  const [listItems, setListItems] = useState([]);
  const [index, setIndex] = useState('');

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>This is your current location</Text>
      </View>
      <View style={styles.bodyView}>
        <MapView
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
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
    height: '50%',
  },
});
