import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View>
      <Text style = {styles.text1}>Welcome to The Google Fonts</Text>
      <Text style = {styles.text2}>Welcome to The Google Fonts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize : 40,
    fontFamily: "Bangers-Regular"
  },
  text2 : {
    fontSize : 30,
    fontFamily : "Lobster-Regular"
  }
});

export default App;
