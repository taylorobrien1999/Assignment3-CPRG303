import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type TabKey = "History" | "Achievements";


const ACTIVITY_HERO_BG = "#133877";

const ACHIEVEMENTS = [
  { id: "a1", title: "First Workout", desc: "Completed 1 workout" },
  { id: "a2", title: "Consistency", desc: "3 workouts this week" },
  { id: "a3", title: "Milestone", desc: "Completed a full program week" },
];

export default function ActivityScreen() {
  const [tab, setTab] = useState<TabKey>("History");

  return (
    <ScrollView style={styles.container}>
      {/* Top profile row */}
      <View style={styles.topBar}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>USER</Text>
        </View>

        <TouchableOpacity
          style={styles.plusButton}
          activeOpacity={0.7}
          onPress={() => console.log("Pressed +")}
        >
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.pageTitle}>Activity</Text>

      {/* Tabs row */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab("History")}
          style={styles.tabBtn}
        >
          <Text style={[styles.tabText, tab === "History" && styles.tabActive]}>
            History
          </Text>
          {tab === "History" && <View style={styles.tabUnderline} />}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab("Achievements")}
          style={styles.tabBtn}
        >
          <Text
            style={[
              styles.tabText,
              tab === "Achievements" ? styles.tabActive : styles.tabInactive,
            ]}
          >
            Achievements
          </Text>
          {tab === "Achievements" && <View style={styles.tabUnderline} />}
        </TouchableOpacity>
      </View>

      {/* Main content */}
      {tab === "History" ? (
        <View style={styles.bigCard}>
          
          <View style={[styles.heroArea, { backgroundColor: ACTIVITY_HERO_BG }]}>
            <Text style={styles.heroTitle}>KEEP YOUR TRAINING{"\n"}ON TRACK</Text>
          </View>

          
          <View style={styles.infoPanel}>
            <Text style={styles.bodyText}>
              Your workouts are recorded here. Tap the plus to add any activities
              you do outside the app.
            </Text>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.ctaBtn}
              onPress={() => console.log("Find a Workout")}
            >
              <Text style={styles.ctaText}>Find a Workout</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.achWrap}>
          {ACHIEVEMENTS.map((a) => (
            <TouchableOpacity
              key={a.id}
              style={styles.achCard}
              activeOpacity={0.85}
              onPress={() => console.log("Achievement:", a.title)}
            >
              <Text style={styles.achTitle}>{a.title}</Text>
              <Text style={styles.achDesc}>{a.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },

  
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    justifyContent: "space-between",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#555",
  },

  plusButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#252525",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 22,
    fontWeight: "400",
    marginTop: -1,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: "400",
    paddingHorizontal: 16,
    paddingBottom: 10,
    color: "#ffffff",
  },

  
  tabsRow: {
    flexDirection: "row",
    gap: 26,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  tabBtn: {
    paddingBottom: 8,
  },
  tabText: {
    fontSize: 13,
    fontWeight: "500",
  },
  tabActive: {
    color: "#ffffff",
  },
  tabInactive: {
    color: "#888",
  },
  tabUnderline: {
    marginTop: 8,
    height: 2,
    width: 54,
    backgroundColor: "#fff",
  },

  
  bigCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 10,
    height: 460,
    overflow: "hidden",
  },

  
  heroArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 20,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  
  infoPanel: {
    backgroundColor: "#252525",
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  bodyText: {
    fontSize: 13,
    color: "#d4d4d4",
    marginBottom: 14,
    lineHeight: 18,
  },
  ctaBtn: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 22,
  },
  ctaText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },

  
  achWrap: {
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  achCard: {
    backgroundColor: "#252525",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  achTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
  achDesc: {
    marginTop: 6,
    fontSize: 13,
    color: "#d4d4d4",
  },
});