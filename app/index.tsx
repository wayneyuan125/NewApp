import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold text-gray-900">Home</Text>
        <Text className="text-lg text-gray-600 mt-4">
          Welcome to Workout Tracker
        </Text>
      </View>
    </SafeAreaView>
  );
}
