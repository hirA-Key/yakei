import React, { FC } from "react";
import { StatusBar, Platform } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { decode, encode } from "base-64";
import { rootReducer } from "./src/reducers";
import Root from "./src";
import "./src/firebase/firebase";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
if (Platform.OS === "ios") {
  StatusBar.setBarStyle("light-content", true);
} else if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("#fff", true);
}

const store = createStore(rootReducer);

const App: FC = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;