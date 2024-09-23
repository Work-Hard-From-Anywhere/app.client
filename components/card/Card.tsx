import { Image } from 'expo-image';
import { BookmarkIcon } from 'lucide-react-native';
import { FC } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Card as CardComponent, XStack, YStack, Text } from 'tamagui';

const { width } = Dimensions.get('window');

interface ICardProps {
  title: string;
  imageUrl: string;
  score: number;
  distance: number;
  reviews: number;
}

const Card: FC<ICardProps> = ({ title, imageUrl, score, distance, reviews }) => {
  return (
    <CardComponent
      elevate
      size="$4"
      bordered
      width={width - 20}
      paddingVertical={10}
      paddingHorizontal={10}>
      <XStack alignItems="center" justifyContent="space-between">
        <Image style={styles.image} source={imageUrl} contentFit="cover" transition={1000} />
        <YStack flex={1} paddingHorizontal="$3" justifyContent="flex-start">
          <YStack gap={6}>
            <Text fontSize={18} fontWeight="bold">
              {title}
            </Text>
            <XStack space="$1" alignItems="center">
              <Text color="$yellow10">★</Text>
              <Text fontSize={14}>
                {score} ({reviews}) · {distance}km
              </Text>
            </XStack>
          </YStack>
        </YStack>
        <BookmarkIcon size={24} color="#6366f1" />
      </XStack>
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    backgroundColor: '#0553',
  },
});

export default Card;
