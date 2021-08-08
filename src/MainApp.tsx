import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export const MainApp = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>loaded</Text>
    </View>
  );
};
