import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.title}>Wekitsak</Text>
        <View style={styles.navIcons}>
          <FontAwesome name="bell" style={styles.icon} />
          <FontAwesome name="cog" style={styles.icon} />
          <Image
            source={{ uri: "https://via.placeholder.com/32" }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Welcome Message */}
      <Text style={styles.welcome}>Welcome back, Priya</Text>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          {[
            { name: "Book Appointment", icon: "calendar" },
            { name: "Video Consult", icon: "video-camera" },
            { name: "My Medicines", icon: "medkit" },
            { name: "Lab Tests", icon: "flask" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.actionButton}>
              <FontAwesome name={item.icon} style={styles.actionIcon} />
              <Text style={styles.actionText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Upcoming Appointment */}
      <View style={styles.appointmentContainer}>
        <Text style={styles.sectionTitle}>Upcoming Appointment</Text>
        <View style={styles.appointmentDetails}>
          <Image
            source={{ uri: "https://via.placeholder.com/32" }}
            style={styles.doctorAvatar}
          />
          <View style={styles.appointmentInfo}>
            <Text style={styles.doctorName}>Dr. Patel</Text>
            <Text style={styles.doctorSpecialty}>Cardiologist</Text>
            <Text style={styles.appointmentTime}>Today, 10:00 AM</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Video Call</Text>
        </TouchableOpacity>
      </View>

      {/* Health Insights */}
      <View>
        <Text style={styles.sectionTitle}>Health Insights</Text>
        <View style={styles.insightsGrid}>
          {[
            { title: "Heart Rate", value: "72 bpm", icon: "heartbeat" },
            { title: "Blood Pressure", value: "120/80 mmHg", icon: "heart" },
            { title: "Weight", value: "65 kg", icon: "balance-scale" },
          ].map((item, index) => (
            <View key={index} style={styles.insightBox}>
              <View style={styles.insightHeader}>
                <Text style={styles.insightTitle}>{item.title}</Text>
                <FontAwesome name={item.icon} style={styles.insightIcon} />
              </View>
              <Text style={styles.insightValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Recent Activities */}
      <View style={styles.recentActivitiesContainer}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        {[
          {
            activity: "Blood Test Results Uploaded",
            time: "3 days ago",
            icon: "file-text",
          },
          {
            activity: "Prescription Renewed",
            time: "1 week ago",
            icon: "medkit",
          },
          {
            activity: "Teleconsultation with Dr. Singh",
            time: "2 weeks ago",
            icon: "stethoscope",
          },
        ].map((item, index) => (
          <View key={index} style={styles.activityItem}>
            <FontAwesome name={item.icon} style={styles.activityIcon} />
            <View>
              <Text style={styles.activityText}>{item.activity}</Text>
              <Text style={styles.activityTime}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  navbar: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, // Elevation for Android shadow
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00B8A9",
  },
  navIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: "#5A6268",
    marginHorizontal: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5A6268",
    marginTop: 20,
    marginHorizontal: 16,
  },
  quickActionsContainer: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00B8A9",
    marginBottom: 10,
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    width: "48%",
    backgroundColor: "#E6F7F5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  actionIcon: {
    fontSize: 24,
    color: "#00B8A9",
    marginBottom: 5,
  },
  actionText: {
    fontSize: 14,
    color: "#5A6268",
  },
  appointmentContainer: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  appointmentDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  doctorAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 10,
  },
  appointmentInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5A6268",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#00B8A9",
  },
  appointmentTime: {
    fontSize: 12,
    color: "#5A6268",
  },
  joinButton: {
    backgroundColor: "#00B8A9",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  joinButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  insightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  insightBox: {
    width: "48%",
    backgroundColor: "#E6F7F5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  insightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  insightTitle: {
    fontSize: 14,
    color: "#5A6268",
  },
  insightIcon: {
    fontSize: 20,
    color: "#00B8A9",
  },
  insightValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00B8A9",
  },
  recentActivitiesContainer: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  activityIcon: {
    fontSize: 20,
    color: "#00B8A9",
    marginRight: 10,
  },
  activityText: {
    fontSize: 14,
    color: "#5A6268",
  },
  activityTime: {
    fontSize: 12,
    color: "#6C757D",
  },
});

export default HomeScreen;
