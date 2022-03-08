import React, {useState, useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {getLaunches} from '../../modules/launches/actions';
import {launchesSelector} from '../../modules/launches/selectors';

export const Home = () => {
  const dispatch = useDispatch();
  const launches = useSelector(launchesSelector);

  useEffect(() => {
    dispatch(getLaunches());
  }, []);

  //dispatch async thunk with Redux toolkit
  //seperate UI with Logic

  // const renderItem = () => {
  //   return <></>;
  // };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Text>🚀spaceX project🚀</Text>
          {/* <FlatList
            data={launches}
            renderItem={renderItem}
            keyExtractor={item => item.flight_number}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
