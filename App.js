import React from 'react';
import {WebView} from 'react-native-webview';
import './src/main/assets/demo.html';

const HTML_URL = 'http://192.168.43.227:5500/src/main/assets/demo.html';

const App = () => {
  return (
    <WebView
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      source={{
        uri: HTML_URL,
      }}
      style={{flex: 1}}
    />
  );
};

export default App;
