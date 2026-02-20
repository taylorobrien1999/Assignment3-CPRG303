import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const FEATURED = [
  {
    id: '1',
    tag: 'Strength Building',
    headline: 'SHOW OFF\nYOUR WORK',
    cta: 'Train With Us',
    bg: '#5a1a1a',
  },
  {
    id: '5',
    tag: 'Cardio',
    headline: 'PUSH YOUR\nLIMITS',
    cta: 'Start Now',
    bg: '#1a2e1a',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* NTC screenshot top profile row */}
      <View style={styles.topBar}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>USER</Text>
        </View>
        <Ionicons name="bookmark-outline" size={24} color="#111" />
      </View>

      <Text style={styles.pageTitle}>Home</Text>

      {/* NTC screenshot whats new row */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>What's New</Text>
          <Text style={styles.sectionSub}>Check out the latest workouts.</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/workouts')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* NTC screenshot featured hero cards */}
      {FEATURED.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.heroCard, { backgroundColor: item.bg }]}
          onPress={() => router.push(`/details/${item.id}`)}
          activeOpacity={0.9}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTag}>{item.tag}</Text>
            <Text style={styles.heroHeadline}>{item.headline}</Text>
            <TouchableOpacity style={styles.heroCta} onPress={() => router.push(`/details/${item.id}`)}>
              <Text style={styles.heroCtaText}>{item.cta}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 40 },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: 13, fontWeight: '700', color: '#555' },
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    paddingHorizontal: 16,
    paddingBottom: 12,
    color: '#111',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: '#111' },
  sectionSub: { fontSize: 13, color: '#888', marginTop: 2 },
  viewAll: { fontSize: 13, color: '#888', marginTop: 2 },
  heroCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 10,
    height: 340,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  heroContent: { padding: 20 },
  heroTag: { color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: '600', marginBottom: 6 },
  heroHeadline: { color: '#fff', fontSize: 32, fontWeight: '900', lineHeight: 36, marginBottom: 20 },
  heroCta: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  heroCtaText: { fontSize: 14, fontWeight: '700', color: '#111' },
});
