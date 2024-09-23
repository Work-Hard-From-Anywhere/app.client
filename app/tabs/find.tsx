import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, YStack } from 'tamagui';

import { SearchInput } from '~/components/SearchInput';
import { Card } from '~/components/card';

const mockData = [
  {
    title: 'Dania Fruit Shop',
    imageUrl: 'https://placehold.co/600x400',
    score: 4.9,
    distance: 2.6,
    reviews: 201,
  },
  {
    title: 'Green Valley Grocery',
    imageUrl: 'https://placehold.co/600x400',
    score: 4.7,
    distance: 1.2,
    reviews: 150,
  },
  {
    title: 'Sunshine Bakery',
    imageUrl: 'https://placehold.co/600x400',
    score: 4.8,
    distance: 3.1,
    reviews: 180,
  },
  {
    title: 'Ocean Breeze Cafe',
    imageUrl: 'https://placehold.co/600x400',
    score: 4.6,
    distance: 0.8,
    reviews: 220,
  },
  {
    title: 'Mountain View Restaurant',
    imageUrl: 'https://placehold.co/600x400',
    score: 4.9,
    distance: 5.0,
    reviews: 300,
  },
];

function Find() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <SearchInput />
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
          <YStack f={1} jc="flex-start" ai="center" gap={4} marginVertical={6} flexGrow={1}>
            {mockData.map(({ distance, imageUrl, reviews, score, title }) => (
              <Card
                distance={distance}
                imageUrl={imageUrl}
                reviews={reviews}
                score={score}
                title={title}
                key={title}
              />
            ))}
          </YStack>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default Find;
