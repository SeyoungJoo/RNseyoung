import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
} from 'react-native';
import {Header} from '../../components/Header';
import {getLaunches} from '../../modules/launches/actions';
import {launchesSelector} from '../../modules/launches/selectors';
import {Launch} from '../../models/launch';
import {isPendingSelector} from '../../modules/status/selectors';
import {RootState} from '../../redux/configureStore';
import {chageeTimeFormat} from '../../utils/changeTimeFormat';
import {truncateString} from '../../utils/truncateString';
import {styles} from './Home.styles';

export const Home = () => {
  const dispatch = useDispatch();
  const launches = useSelector(launchesSelector);
  const [sorting, setSorting] = useState('');

  const isLaunchesPeding = useSelector((state: RootState) =>
    isPendingSelector(state, getLaunches.typePrefix),
  );

  useEffect(() => {
    dispatch(getLaunches({sortBy: 'launch_year', orderBy: '', year: ''}));
  }, []);

  const handleReload = useCallback(() => {
    dispatch(getLaunches({}));
  }, [dispatch]);

  const changeSortingText = (text: string) => {
    if (text === 'desc') {
      return setSorting('asc');
    } else {
      return setSorting('desc');
    }
  };

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
        <Pressable
          style={styles.button}
          onPress={() => {
            return Alert.prompt(
              'Enter Year',
              'Enter a valid year',
              [
                {
                  text: 'Cancel',
                  onPress: () => {},
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: year =>
                    dispatch(
                      getLaunches({
                        sortBy: 'launch_year',
                        orderBy: sorting,
                        year,
                      }),
                    ),
                },
              ],
              'plain-text',
            );
          }}>
          <Text style={styles.buttonText}>Search by year</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            changeSortingText(sorting);
            dispatch(
              getLaunches({
                sortBy: 'launch_year',
                orderBy: sorting,
                year: '',
              }),
            );
          }}>
          <Text style={styles.buttonText}>{`Sorting ${sorting}`}</Text>
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
