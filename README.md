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
