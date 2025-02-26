import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ListScreen from "./Screen/ListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ListScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
