import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

export default function App() {
  const [pressedCount, setPressedCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <Text style={{ color: "white", marginTop: 5 }}>Hei Glenn</Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ScrollView horizontal contentContainerStyle={styles.container}>
          <View style={{ width: 300, height: 300, backgroundColor: "red" }} />
          <View style={{ width: 300, height: 300, backgroundColor: "green" }} />
          <View style={{ width: 300, height: 300, backgroundColor: "blue" }} />
        </ScrollView>
        <ScrollView alwaysBounceVertical alwaysBounceHorizontal>
          <Text style={{ color: "white", fontSize: 16 }}>
            The <Text style={{ fontWeight: "bold" }}>quick brown fox</Text>{" "}
            jumps over the lazy dog
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            The <Text style={{ fontWeight: "bold" }}>quick brown fox</Text>{" "}
            jumps over the lazy dog
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            The <Text style={{ fontWeight: "bold" }}>quick brown fox</Text>{" "}
            jumps over the lazy dog
          </Text>
        </ScrollView>
        <Button
          title="Press me"
          onPress={() => setPressedCount(pressedCount + 1)}
          disabled={pressedCount >= 3}
        />
      </View>
      <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    alignItems: "center",
  },
});
