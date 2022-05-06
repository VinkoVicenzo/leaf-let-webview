import React from 'react';
import {WebView} from 'react-native-webview';

const HTML_URL = 'https://vinkovicenzo.github.io/rn-letlet-demo/';

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
