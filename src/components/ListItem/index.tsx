// import React from 'react';
// import {useSelector} from 'react-redux';
// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import {launchesSelector} from '../../modules/launches/selectors';
// import {getLaunches} from '../../modules/launches/actions';
// import {RootState} from '../../redux/configureStore';
// import {Launch} from '../../models/launch';
// import {styles} from '../../screen/Home/Home.styles';
// import {truncateString} from '../../utils/truncateString';
// import {chageeTimeFormat} from '../../utils/changeTimeFormat';
// import {isPendingSelector} from '../../modules/status/selectors';

// export const ListItem = ({handleReload, onpress}) => {
//   const launches = useSelector(launchesSelector);

//   const isLaunchesPeding = useSelector((state: RootState) =>
//     isPendingSelector(state, getLaunches.typePrefix),
//   );

//   const renderItem = ({item}: {item: Launch}) => {
//     return (
//       <>
//         <View style={styles.item}>
//           <View style={styles.box}>
//             <Text style={styles.title}>
//               {truncateString(item.mission_name)}
//             </Text>
//             <View style={styles.dateContainer}>
//               <Text style={styles.date}>
//                 {chageeTimeFormat(item.launch_date_utc)}
//               </Text>
//               <Text>{item.rocket.rocket_name}</Text>
//             </View>
//           </View>
//         </View>
//       </>
//     );
//   };

//   return (
//     <FlatList
//       data={launches}
//       renderItem={renderItem}
//       contentContainerStyle={StyleSheet.flatten({paddingBottom: 90})}
//       keyExtractor={item =>
//         `${item.flight_number.toString()}-${item.launch_date_utc}`
//       }
//       refreshing={isLaunchesPeding}
//       onRefresh={handleReload}
//       onpress={() => {
//         onpress;
//       }}
//     />
//   );
// };
