import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
