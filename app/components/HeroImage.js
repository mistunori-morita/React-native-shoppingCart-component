/* @flow */

import React, { Component } from 'react';
import HeroText from './HeroText';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default class HeroImage extends Component {
  render() {
    return (

        <ImageBackground
          source={require('../img/img2.jpeg')}
          style={styles.hero}
        >
          <HeroText />
        </ImageBackground>
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
