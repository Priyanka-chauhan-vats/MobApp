import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const ErrorMessage = ({errors, touched, name}) => {
  if (errors?.[name] && touched?.[name]) {
    return <Text style={Styles.error}>{errors?.[name]}</Text>;
  } else {
    return null;
  }
};

const Styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: 'red',
  },
});
