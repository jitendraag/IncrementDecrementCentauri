import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  let [counterValue, setCounterValue] = useState(0);

  const handleDecreasePress = () =>
    setCounterValue(currentCount => currentCount - 1);

  const handleIncreasePress = () =>
    setCounterValue(currentCount => currentCount + 1);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.counterText}>
          <Text>{counterValue}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleDecreasePress} style={styles.button}>
            <Text>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleIncreasePress} style={styles.button}>
            <Text>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 15,
    margin: 30,
  },
});

export default App;
