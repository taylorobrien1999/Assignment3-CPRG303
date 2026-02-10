import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import ListRow from "@/components/ListRow";
import { items } from "@/data/items";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <ListRow
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          onPress={() => router.push(`/details/${item.id}`)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
});