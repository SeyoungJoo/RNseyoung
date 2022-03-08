import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  Pressable,
} from 'react-native';
import {Header} from '../../components/Header';
import {getLaunches} from '../../modules/launches/actions';
import {launchesSelector} from '../../modules/launches/selectors';
import {Launch} from '../../models/launch';
import {isPendingSelector} from '../../modules/status/selectors';
import {RootState} from '../../redux/configureStore';
import {chageeTimeFormat} from '../../utils/changeTimeFormat';
import {truncateString} from '../../utils/truncateString';

export const Home = () => {
  const dispatch = useDispatch();
  const launches = useSelector(launchesSelector);
  const isLaunchesPeding = useSelector((state: RootState) =>
    isPendingSelector(state, getLaunches.typePrefix),
  );
  //dispatch async thunk with Redux toolkit
  //seperate UI with Logic

  useEffect(() => {
    dispatch(getLaunches());
  }, []);

  const handleReload = useCallback(() => {
    dispatch(getLaunches());
  }, [dispatch]);

  const renderItem = ({item}: {item: Launch}) => {
    return (
      <>
        <View style={styles.item}>
          <View style={styles.box}>
            <Text style={styles.title}>
              {truncateString(item.mission_name)}
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>
                {chageeTimeFormat(item.launch_date_utc)}
              </Text>
              <Text>{item.rocket.rocket_name}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>filter by Year</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          // onPress={onPress}
        >
          <Text style={styles.buttonText}>Sorting Decending</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={launches}
          renderItem={renderItem}
          contentContainerStyle={StyleSheet.flatten({paddingBottom: 90})}
          keyExtractor={item =>
            `${item.flight_number.toString()}-${item.launch_date_utc}`
          }
          refreshing={isLaunchesPeding}
          onRefresh={handleReload}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#02055a',
    alignSelf: 'flex-start',
    padding: 8,
    marginLeft: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 12,
  },
  item: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
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
  date: {
    fontSize: 13,
    color: 'grey',
    marginBottom: 6,
  },
  dateContainer: {
    alignItems: 'flex-end',
  },
});
