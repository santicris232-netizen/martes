import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

const WEBAPP_URL = "https://REEMPLAZAR-URL-VERCEL.vercel.app";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard Replica Potter</Text>
      </View>
      <WebView source={{ uri: WEBAPP_URL }} startInLoadingState />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7ed"
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#fdba74"
  },
  title: {
    color: "#9a3412",
    fontWeight: "700",
    fontSize: 16
  }
});
