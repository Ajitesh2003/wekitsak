import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const DoctorDashboard = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const sidebarWidth = useState(new Animated.Value(width * 0.22))[0];

  // Toggle sidebar expansion
  const toggleSidebar = () => {
    Animated.timing(sidebarWidth, {
      toValue: isSidebarExpanded ? width * 0.22 : width * 0.5,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { width: sidebarWidth }]}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleSidebar}>
          <Icon
            name={isSidebarExpanded ? "chevron-left" : "chevron-right"}
            size={24}
            style={styles.toggleIcon}
          />
        </TouchableOpacity>
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="dashboard" size={20} style={styles.navIcon} />
            {isSidebarExpanded && <Text style={styles.navText}>Dashboard</Text>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="calendar" size={20} style={styles.navIcon} />
            {isSidebarExpanded && (
              <Text style={styles.navText}>Appointments</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="users" size={20} style={styles.navIcon} />
            {isSidebarExpanded && <Text style={styles.navText}>Patients</Text>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="bar-chart" size={20} style={styles.navIcon} />
            {isSidebarExpanded && <Text style={styles.navText}>Analytics</Text>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="cogs" size={20} style={styles.navIcon} />
            {isSidebarExpanded && <Text style={styles.navText}>Settings</Text>}
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>Wekitsak</Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.consultButton}>
              <Icon
                name="video-camera"
                size={18}
                color="#fff"
                style={styles.buttonIcon}
              />
              <Text style={styles.consultButtonText}>Consult Now</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: "https://via.placeholder.com/40" }}
              style={styles.avatar}
            />
          </View>
        </View>

        {/* Dashboard Content */}
        <ScrollView style={styles.dashboardContent}>
          {/* Stats Overview */}
          <View style={styles.statsContainer}>
            {[
              "Today's Appointments",
              "New Patients",
              "Pending Reports",
              "Average Rating",
            ].map((title, index) => (
              <View key={index} style={styles.statCard}>
                <View style={styles.statHeader}>
                  <Text style={styles.statTitle}>{title}</Text>
                  <Icon
                    name={["calendar", "user-plus", "file-text", "star"][index]}
                    size={24}
                    style={styles[`statIcon${index}`]}
                  />
                </View>
                <Text style={styles.statValue}>{[12, 5, 7, 4.8][index]}</Text>
                <Text style={styles.statSubText}>
                  {
                    [
                      "4 video consultations",
                      "This week",
                      "Require review",
                      "From 150 reviews",
                    ][index]
                  }
                </Text>
              </View>
            ))}
          </View>

          {/* Upcoming Appointments */}
          <View style={styles.upcomingAppointments}>
            <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* Sample Appointment Item */}
              <View style={styles.appointmentItem}>
                <Image
                  source={{ uri: "https://via.placeholder.com/40" }}
                  style={styles.patientAvatar}
                />
                <View style={styles.patientInfo}>
                  <Text style={styles.patientName}>Rahul Sharma</Text>
                  <Text style={styles.patientDetails}>32 years, Male</Text>
                </View>
                <Text style={styles.appointmentTime}>10:00 AM</Text>
                <View style={styles.appointmentTypeContainer}>
                  <Text style={styles.appointmentType}>
                    <Icon name="video-camera" size={12} color="#fff" />
                  </Text>
                </View>
                <View style={styles.appointmentStatusContainer}>
                  <Text style={styles.appointmentStatus}>Upcoming</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.actionText}>View Details</Text>
                </TouchableOpacity>
              </View>

              {/* Add more items as needed */}
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* Sample Appointment Item */}
              <View style={styles.appointmentItem}>
                <Image
                  source={{ uri: "https://via.placeholder.com/40" }}
                  style={styles.patientAvatar}
                />
                <View style={styles.patientInfo}>
                  <Text style={styles.patientName}>Arvind Tyagi</Text>
                  <Text style={styles.patientDetails}>22 years, Male</Text>
                </View>
                <Text style={styles.appointmentTime}>11:00 AM</Text>
                <View style={styles.appointmentTypeContainer}>
                  <Text style={styles.appointmentType}>
                    <Icon name="phone" size={12} color="#fff" />
                  </Text>
                </View>
                <View style={styles.appointmentStatusContainer}>
                  <Text style={styles.appointmentStatus}>Upcoming</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.actionText}>View Details</Text>
                </TouchableOpacity>
              </View>

              {/* Add more items as needed */}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F8F9FA",
  },
  sidebar: {
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 70,
    position: "absolute", // Absolute positioning
    height: "100%", // Ensures full height coverage
    zIndex: 1, // Stacks the sidebar above the main content
    left: 0, // Aligns it to the left
  },
  navContainer: {
    marginTop: 60,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  navIcon: {
    marginRight: 15,
    color: "#5A6268",
  },
  navText: {
    fontSize: 17,
    color: "#5A6268",
  },
  toggleButton: {
    position: "absolute",
    top: 50,
    right: 30,
    padding: 10, // Adjust padding for a square button
    backgroundColor: "#F0F0F0", // Light grey background color
    borderRadius: 8, // Rounded corners
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  toggleIcon: {
    color: "#5A6268",
  },
  mainContent: {
    flex: 1,
    flexDirection: "column",
    marginLeft: width * 0.22, // Padding to the left equal to the initial sidebar width
  },
  topBar: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topBarTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00B8A9",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  consultButton: {
    backgroundColor: "#00B8A9",
    marginLeft: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  consultButtonText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 15,
  },
  dashboardContent: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCard: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  statHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#5A6268",
  },
  statIcon0: {
    color: "#00B8A9",
  },
  statIcon1: {
    color: "#FF8C69",
  },
  statIcon2: {
    color: "#FFD700",
  },
  statIcon3: {
    color: "#FFD700",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00B8A9",
    marginTop: 10,
  },
  statSubText: {
    fontSize: 10,
    color: "#5A6268",
    marginTop: 5,
  },
  upcomingAppointments: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#5A6268",
  },
  appointmentItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginRight: 10,
    elevation: 2,
  },
  patientAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#5A6268",
  },
  patientDetails: {
    fontSize: 12,
    color: "#7A869A",
  },
  appointmentTime: {
    fontSize: 12,
    color: "#7A869A",
    marginLeft: 10,
  },
  appointmentTypeContainer: {
    marginLeft: 10,
    backgroundColor: "#00B8A9",
    borderRadius: 5,
    padding: 5,
  },
  appointmentType: {
    color: "#F4E1A1",
  },
  appointmentStatusContainer: {
    marginLeft: 10,
    borderRadius: 5,
    padding: 5,
  },
  appointmentStatus: {
    color: "#00B8A9",
  },
  actionText: {
    color: "#00B8A9",
    fontWeight: "bold",
  },
});

export default DoctorDashboard;
