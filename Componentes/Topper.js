import React from 'react';
import { View, Text, Button } from 'react-native';

const Topper = ({ navigation }) => {
  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={navigateToDetails}
      />
    </View>
  );
};

export default Topper;
