import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {chageeTimeFormat} from '../../utils/changeTimeFormat';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation';
import {RouteProp} from '@react-navigation/native';

type DetailScreenRouteProp = RouteProp<RootStackParams, 'SpaceItemDetails'>;

type Props = {
  route: DetailScreenRouteProp;
};

export const SpaceItemDetails = ({route}: Props) => {
  const spaceDetail = route.params.item;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container} testID="detailPage">
      {/* <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable> */}
      <Text style={styles.header}>
        Mission Name: {spaceDetail.mission_name}
      </Text>
      <Text style={styles.date}>
        Launch Date: {chageeTimeFormat(spaceDetail.launch_date_utc)}
      </Text>
      <Text style={styles.body}>
        Rocket Name: {spaceDetail.rocket.rocket_name}
      </Text>
      <Text style={styles.body}>
        Site Name: {spaceDetail.launch_site.site_name_long}
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {marginTop: 10, fontSize: 16},
  body: {fontSize: 16},
});
