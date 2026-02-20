import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PROGRAMS = [
  {
    id: '1',
    title: 'Flow for Growth',
    description: 'Stretch out and reach inwards as you grow your practice, one flow at a time.',
    duration: '2-3 weeks, bodyweight only',
    bg: '#551313'
  },
  {
    id: '2',
    title: 'Core Reset',
    description: 'Build core muscles through controlled movements and contractions.',
    duration: '3–4 weeks, minimal equipment',
    bg: '#133877'
  },
];

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

        {/*Program Section*/}
        {PROGRAMS.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.programCard, { backgroundColor: item.bg }]}
          activeOpacity={0.8}
          onPress={() => console.log("Pressed program:", item.title)}>
    
          <Text style={styles.programTitle}>{item.title}</Text>

          <View style={styles.programInfo}>
            <Text style={styles.programDesc}>{item.description}</Text>
            <Text style={styles.programDur}>{item.duration}</Text>
          </View>
        </TouchableOpacity>
        ))}


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#161616' 
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  avatarText: { 
    fontSize: 13, 
    fontWeight: '700', 
    color: '#555' 
  },
  pageTitle: { 
    fontSize: 28, 
    fontWeight: '400', 
    paddingHorizontal: 16, 
    paddingBottom: 16, 
    color: '#ffffff' 
  },

  //Program card styles
  programCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 10,
    height: 380,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  programTitle: {
    position: 'absolute',
    bottom: 110,
    left: 25,
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
  },
  programInfo: {
    backgroundColor: '#252525',
    padding: 16,
  },
  programDesc: {
    fontSize: 13,
    color: '#d4d4d4',
    marginBottom: 6,
  },
  programDur: {
    fontSize: 12,
    color: '#666',
  },

});
 