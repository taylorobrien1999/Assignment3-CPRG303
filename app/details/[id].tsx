import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { items } from "@/data/items";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = items.find((x) => x.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Item not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={{ marginTop: 16 }}>
        Replace this with real content later.
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "700" },
  subtitle: { marginTop: 8, opacity: 0.75 },
});