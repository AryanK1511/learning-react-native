import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons name="trophy" size={32} color="white" />
          </View>
          <Text style={styles.headerTitle}>Goal Tracker</Text>
          <Text style={styles.headerSubtitle}>
            Turn your dreams into reality
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputCard}>
            <View style={styles.inputHeader}>
              <Ionicons name="add-circle" size={24} color="#667eea" />
              <Text style={styles.inputLabel}>What's your goal today?</Text>
            </View>
            <TextInput
              placeholder="Enter your course goal..."
              placeholderTextColor="#a0a0a0"
              style={styles.textInput}
            />
            <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
              <LinearGradient
                colors={['#ff6b6b', '#ee5a24']}
                style={styles.buttonGradient}
              >
                <Ionicons
                  name="add"
                  size={20}
                  color="white"
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>Add Goal</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.goalsSection}>
            <View style={styles.sectionHeader}>
              <Ionicons name="list" size={24} color="white" />
              <Text style={styles.sectionTitle}>Your Goals</Text>
            </View>
            <View style={styles.goalsList}>
              <View style={styles.goalCard}>
                <View style={styles.goalIcon}>
                  <Ionicons name="target" size={24} color="#667eea" />
                </View>
                <View style={styles.goalContent}>
                  <Text style={styles.goalText}>Learn React Native</Text>
                  <Text style={styles.goalDate}>Added today</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  activeOpacity={0.7}
                >
                  <Ionicons name="close" size={20} color="white" />
                </TouchableOpacity>
              </View>

              <View style={styles.goalCard}>
                <View style={styles.goalIcon}>
                  <Ionicons name="rocket" size={24} color="#ff6b6b" />
                </View>
                <View style={styles.goalContent}>
                  <Text style={styles.goalText}>Build a mobile app</Text>
                  <Text style={styles.goalDate}>Added yesterday</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  activeOpacity={0.7}
                >
                  <Ionicons name="close" size={20} color="white" />
                </TouchableOpacity>
              </View>

              <View style={styles.goalCard}>
                <View style={styles.goalIcon}>
                  <Ionicons name="bulb" size={24} color="#feca57" />
                </View>
                <View style={styles.goalContent}>
                  <Text style={styles.goalText}>Master JavaScript</Text>
                  <Text style={styles.goalDate}>Added 2 days ago</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  activeOpacity={0.7}
                >
                  <Ionicons name="close" size={20} color="white" />
                </TouchableOpacity>
              </View>

              <View style={styles.goalCard}>
                <View style={styles.goalIcon}>
                  <Ionicons name="heart" size={24} color="#ff9ff3" />
                </View>
                <View style={styles.goalContent}>
                  <Text style={styles.goalText}>Stay healthy and fit</Text>
                  <Text style={styles.goalDate}>Added 3 days ago</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  activeOpacity={0.7}
                >
                  <Ionicons name="close" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  headerIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 24,
  },
  inputCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  inputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#f0f0f0',
    borderRadius: 16,
    padding: 18,
    fontSize: 16,
    backgroundColor: '#fafafa',
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  addButton: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  goalsSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  goalsList: {
    // Removed flex: 1 since it's no longer a ScrollView
  },
  goalCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },
  goalIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },
  goalContent: {
    flex: 1,
  },
  goalText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  goalDate: {
    fontSize: 14,
    color: '#888',
  },
  deleteButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
