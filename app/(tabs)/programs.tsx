import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProgramsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Top profile row */}
          <View style={styles.topBar}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>USER</Text>
            </View>
          </View>
          <Text style={styles.pageTitle}>Programs</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  title: { 
    color: '#111', 
    fontSize: 28, 
    fontWeight: '800', 
    padding: 16 
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 4,
  },
  avatarText: { 
    fontSize: 13, 
    fontWeight: '700', 
    color: '#555' 
  },
  pageTitle: { 
    fontSize: 28, 
    fontWeight: '800', 
    paddingHorizontal: 16, 
    paddingBottom: 12, 
    color: '#111' 
  },
});
