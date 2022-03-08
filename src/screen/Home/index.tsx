import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header';
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
            <View>
              <Text>{chageeTimeFormat(item.launch_date_utc)}</Text>
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
