import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { items } from '@/data/items';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const item = items.find((x) => x.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Workout not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero colour block */}
      <View style={styles.hero}>
        {item.isNew && (
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>New</Text>
          </View>
        )}
        <View style={styles.heroMeta}>
          <Text style={styles.heroCategory}>{item.category.toUpperCase()}</Text>
          <Text style={styles.heroTitle}>{item.title}</Text>
          <Text style={styles.heroSub}>{item.subtitle}</Text>
        </View>
      </View>

      {/* Info pills */}
      <View style={styles.pillRow}>
        <View style={styles.pill}>
          <Text style={styles.pillLabel}>Duration</Text>
          <Text style={styles.pillValue}>{item.duration}</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillLabel}>Level</Text>
          <Text style={styles.pillValue}>{item.level}</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillLabel}>Equipment</Text>
          <Text style={styles.pillValue}>{item.equipment}</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {/* Exercises */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exercises</Text>
        {item.exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseRow}>
            <View style={styles.exerciseNum}>
              <Text style={styles.exerciseNumText}>{index + 1}</Text>
            </View>
            <Text style={styles.exerciseName}>{exercise}</Text>
          </View>
        ))}
      </View>

      {/* Start button */}
      <TouchableOpacity style={styles.startBtn} onPress={() => router.back()}>
        <Text style={styles.startBtnText}>Start Workout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 40 },
  notFound: { padding: 20, fontSize: 16 },
  hero: {
    height: 260,
    backgroundColor: '#1a1a1a',
    justifyContent: 'flex-end',
    padding: 20,
  },
  newBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  newBadgeText: { fontSize: 12, fontWeight: '700', color: '#e00' },
  heroMeta: { gap: 4 },
  heroCategory: { color: 'rgba(255,255,255,0.55)', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  heroTitle: { color: '#fff', fontSize: 22, fontWeight: '800', lineHeight: 28 },
  heroSub: { color: 'rgba(255,255,255,0.65)', fontSize: 13 },
  pillRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  pill: { flex: 1, alignItems: 'center' },
  pillLabel: { fontSize: 11, color: '#aaa', marginBottom: 3 },
  pillValue: { fontSize: 13, fontWeight: '700', color: '#111', textAlign: 'center' },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: { fontSize: 16, fontWeight: '800', color: '#111', marginBottom: 10 },
  description: { fontSize: 14, color: '#555', lineHeight: 22 },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
    gap: 14,
  },
  exerciseNum: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseNumText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  exerciseName: { fontSize: 14, color: '#333', fontWeight: '500' },
  startBtn: {
    margin: 16,
    backgroundColor: '#111',
    borderRadius: 30,
    padding: 18,
    alignItems: 'center',
  },
  startBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
