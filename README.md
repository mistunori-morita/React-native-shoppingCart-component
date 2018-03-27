# shoppingカートコンポーネントの実装
- img利用のおさらい
```js
import {
  View,
  Text,
  //ここでimageをインポート
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';


<Image
  //呼び出すときは[require]でパスを書く
  source={require('../img/img1.png')}
  style={styles.logo}
  />
```

- スクロールのおさらい
```js
//こういう形でviewを貼り付けていたとして
render() {
  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>
      </View>
      <View style={styles.column2}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>
      </View>
      <View style={styles.full}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>
      </View>

      <View style={styles.column2}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>
      </View>
      <View style={styles.column1}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>
      </View>
      <View style={styles.full}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>
      </View>
    </View>
  );

  //ScrollViewを使わないとスクロールができない
  import React from 'react';
  //1.まずScrollViewをimportする
  import { StyleSheet, Text, View, ScrollView } from 'react-native';
  import Header from './app/components/Header';
  import HeroImage from './app/components/HeroImage';
  import Body from './app/components/Body';

  export default class App extends React.Component {
    render() {
      return (
        //2.ScrollViewでラッピング
        <ScrollView style={styles.container}>
          <Header />
          <HeroImage />
          <Body />
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //3.ここがポイント！ScrollViewの場合App.js（一番親のコンポーネント）にalignItem+justifyContentがあるとエラーになる
      alignItems: 'center',
      justifyContent: 'center',
      //よってこの上の２つを消す
    },
  });

  //つまりこうなる
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
```

- 背景画像として扱う方法
```js

import {
  View,
  Text,
  //ImageBackgroundに変更してラップすると使える
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default class HeroImage extends Component {
  render() {
    return (
        //ImageBackgroundでラップすると
        <ImageBackground
          source={require('../img/img2.jpeg')}
          style={styles.hero}
        >
          <HeroText />
        </ImageBackground>
    );
  }
}

```
#### こんな形になる
![pc](img/1.png)

## 完成図
![pc](img/2.gif)
