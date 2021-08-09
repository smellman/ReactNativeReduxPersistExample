import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';
import {setNum, setStr} from './feature/input';

export const MainApp = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const num = useSelector(state => (state as RootState).input.num);
  const str = useSelector(state => (state as RootState).input.str);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Hey!</Text>
      </View>
      <View>
        <Text>num:</Text>
        <TextInput
          value={num.toString()}
          keyboardType={'numeric'}
          onChangeText={text => {
            const newValue = parseFloat(text);
            if (!isNaN(newValue)) {
              dispatch(setNum(newValue));
            }
          }}
        />
      </View>
      <View>
        <Text>str:</Text>
        <TextInput
          value={str}
          keyboardType={'numeric'}
          onChangeText={text => {
            dispatch(setStr(text));
          }}
        />
      </View>
    </SafeAreaView>
  );
};
