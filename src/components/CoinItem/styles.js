import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderBottomColor: "#282828",
    padding: 15,
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
