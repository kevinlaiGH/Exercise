import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("palace_hotel.jpg")} />
        <Text
          style={{
            color: "lightblue",
            backgroundColor: "#335",
            fontSize: 0.1,
            fontWeight: "700",
            width: 0.45,
            height: 0.45,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translateZ: -3 }]
          }}
        >
          hello
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
