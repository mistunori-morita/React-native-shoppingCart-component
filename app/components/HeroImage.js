/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class HeroImage extends Component {
  render() {
    return (

        <Image
          source={require('../img/img2.jpeg')}
          style={styles.hero}
        />
    );
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
