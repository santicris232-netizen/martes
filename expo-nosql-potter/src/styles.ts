import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f9ff"
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: "#0f172a"
  },
  input: {
    borderWidth: 1,
    borderColor: "#7dd3fc",
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 12,
    padding: 12
  },
  buttonRow: {
    marginTop: 8,
    marginBottom: 8
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#bae6fd"
  },
  subtitle: {
    color: "#334155"
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 999
  },
  dotOn: {
    backgroundColor: "#16a34a"
  },
  dotOff: {
    backgroundColor: "#dc2626"
  }
});
