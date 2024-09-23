import { TextInput, StyleSheet, View } from 'react-native';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default SearchInput;
