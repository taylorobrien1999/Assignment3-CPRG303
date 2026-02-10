import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

export default function ListRow({ title, subtitle, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: "600" },
  subtitle: { marginTop: 4, opacity: 0.7 },
});