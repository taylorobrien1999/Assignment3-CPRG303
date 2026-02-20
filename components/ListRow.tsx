import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  subtitle?: string;
  duration?: string;
  level?: string;
  equipment?: string;
  isNew?: boolean;
  onPress?: () => void;
};

export default function ListRow({ title, subtitle, duration, level, equipment, isNew, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      {/* NTC real image placeholder */}
      <View style={styles.thumb}>
        {isNew && (
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>New</Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.meta}>
          {[level, equipment, duration].filter(Boolean).join(' · ')}
        </Text>
      </View>

      <Ionicons name="bookmark-outline" size={20} color="#999" style={styles.bookmark} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  pressed: { opacity: 0.7 },
  thumb: {
    width: 90,
    height: 68,
    borderRadius: 6,
    backgroundColor: '#d0d0d0',
    marginRight: 12,
    justifyContent: 'flex-end',
    padding: 6,
  },
  newBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: { fontSize: 11, fontWeight: '700', color: '#e00' },
  info: { flex: 1 },
  title: { fontSize: 15, fontWeight: '700', color: '#111', marginBottom: 4 },
  meta: { fontSize: 12, color: '#888', lineHeight: 18 },
  bookmark: { marginLeft: 8 },
});
