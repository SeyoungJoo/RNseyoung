import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {chageeTimeFormat} from '../../utils/changeTimeFormat';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SpaceItemDetails = ({route, navigation}) => {
  const spaceDetail = route.params.detail;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.gobackButton}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
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
