import React, { useState, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Input } from 'tamagui';

const SCREEN_HEIGHT = Dimensions.get('window').height - 150;
const COLLAPSED_HEIGHT = 80;

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(COLLAPSED_HEIGHT)).current;

  const handleExpand = () => {
    setIsExpanded(true);
    Animated.timing(animatedHeight, {
      toValue: SCREEN_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleCollapse = () => {
    Animated.timing(animatedHeight, {
      toValue: COLLAPSED_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsExpanded(false);
    });
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={[styles.container, { height: animatedHeight }]}>
        <View style={[styles.searchBarContainer, { height: COLLAPSED_HEIGHT }]}>
          <Input size="$4" placeholder="Search" style={styles.input} onFocus={handleExpand} />
          {isExpanded && (
            <TouchableOpacity onPress={handleCollapse} style={styles.cancelButton}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
        {isExpanded && (
          <View style={styles.resultsContainer}>
            <Text>Search results will appear here</Text>
          </View>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    flex: 1,
  },
  cancelButton: {
    marginLeft: 10,
  },
  resultsContainer: {
    flex: 1,
    padding: 10,
  },
});

export default Search;
