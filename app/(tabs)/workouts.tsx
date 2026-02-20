import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ListRow from '@/components/ListRow';
import { items, categories } from '@/data/items';

const SECTIONS = [
  { key: 'outdo', title: 'Outdo Yourself', sub: 'Next up: circuits to keep you agile. Lifts, presses, quick bursts. Let\'s go.' },
  { key: 'feb', title: 'February Flex', sub: 'Trainer-led workouts to guide you step-by-step through full-body strength and conditioning.' },
];

export default function WorkoutsScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = items.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      query.trim() === '' ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Split into two sections for display (NTC style)
  const section1 = filtered.slice(0, 3);
  const section2 = filtered.slice(3);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Top profile row */}
      <View style={styles.topBar}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>USER</Text>
        </View>
        <Ionicons name="bookmark-outline" size={24} color="#111" />
      </View>

      <Text style={styles.pageTitle}>Workouts</Text>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={18} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      {/* Category */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, selectedCategory === cat && styles.chipActive]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Section 1 */}
      {section1.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{SECTIONS[0].title}</Text>
          <Text style={styles.sectionSub}>{SECTIONS[0].sub}</Text>
          {section1.map((item) => (
            <ListRow
              key={item.id}
              title={item.title}
              level={item.level}
              equipment={item.equipment}
              duration={item.duration}
              isNew={item.isNew}
              onPress={() => router.push(`/details/${item.id}`)}
            />
          ))}
        </View>
      )}

      {/* Section 2 */}
      {section2.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{SECTIONS[1].title}</Text>
          <Text style={styles.sectionSub}>{SECTIONS[1].sub}</Text>
          {section2.map((item) => (
            <ListRow
              key={item.id}
              title={item.title}
              level={item.level}
              equipment={item.equipment}
              duration={item.duration}
              isNew={item.isNew}
              onPress={() => router.push(`/details/${item.id}`)}
            />
          ))}
        </View>
      )}
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
  pageTitle: { fontSize: 28, fontWeight: '800', paddingHorizontal: 16, paddingBottom: 12, color: '#111' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    marginHorizontal: 16,
    marginBottom: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 15, color: '#111' },
  chips: { paddingHorizontal: 16, paddingBottom: 12, gap: 8 },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 6,
  },
  chipActive: { backgroundColor: '#111' },
  chipText: { fontSize: 13, color: '#555', fontWeight: '500' },
  chipTextActive: { color: '#fff' },
  section: { paddingHorizontal: 16, marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#111', marginBottom: 4 },
  sectionSub: { fontSize: 13, color: '#888', marginBottom: 14, lineHeight: 19 },
});
