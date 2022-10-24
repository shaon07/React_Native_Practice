import { StyleSheet } from 'react-native';
import Routes from "./Routes/Routes";

export default function App() {
  return (
    <Routes />
    // <View style={styles.container}>
    //   <Text>Home Page </Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});