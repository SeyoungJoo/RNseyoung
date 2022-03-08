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

  //dispatch async thunk with Redux toolkit
  //seperate UI with Logic

  useEffect(() => {
    dispatch(getLaunches());
  }, []);

  const chageeTimeFormat = (utc_time: string) => {
    let date = new Date(utc_time);
    return date.toLocaleDateString();
  };

  const shortenCharacter = (string: string) => {
    return string.substring(0, 8);
  };

  const renderItem = data => {
    return (
      <>
        <View style={styles.item}>
          <View style={styles.box}>
            {/* <Text>#</Text> */}
            <Text style={styles.title}>
              {shortenCharacter(data.item.mission_name)}
            </Text>
            <View>
              <Text>{chageeTimeFormat(data.item.launch_date_utc)}</Text>
              <Text>{data.item.rocket.rocket_name}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView>
      <Header />
      <View>
        <FlatList
          data={launches}
          renderItem={renderItem}
          keyExtractor={item => item.flight_number.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});
