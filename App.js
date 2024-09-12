import React from "react";
import { StyleSheet, View } from "react-native";
// import HomeScreen from "./HomeScreen";
import DoctorDashboard from "./DoctorDashboard";
// Ensure this path is correct

// <HomeScreen />
const App = () => {
  return (
    <View style={styles.container}>
      <DoctorDashboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
});

export default App;
