import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, TextInput, View, Text } from 'react-native';

function App() {
  return (
    <View style={{...styles.container,...{backgroundColor: 'green'}}}>
      <View style={{ flex: 2, flexDirection: "row", borderRadius: 20, alignItems: 'center' }}>
        <TextInput style={{ flex: 8 }} placeholder='Friday, 15 Dec' />
        <View>
          <Button
            color='#aaaaaa'
            title='Search' />
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold'
        }}>Learn</Text>
        <Text style={{
          fontSize: 19
        }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, saepe!</Text>
      </View>
      <View style={{
        flex: 10,
        justifyContent: 'space-between'
      }}>
        <View style={{
          padding: 25,
          backgroundColor: 'red',
          borderRadius: 20
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
          }}>Head & Face</Text>
          <Text style={{
            fontSize: 16,
            color: '#ddd'
          }}>11 diseases</Text>
        </View>
        <View style={{
          padding: 25,
          backgroundColor: 'red',
          borderRadius: 20
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
          }}>Head & Face</Text>
          <Text style={{
            fontSize: 16,
            color: '#ddd'
          }}>11 diseases</Text>
        </View>
        <View style={{
          padding: 25,
          backgroundColor: 'red',
          borderRadius: 20
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
          }}>Head & Face</Text>
          <Text style={{
            fontSize: 16,
            color: '#ddd'
          }}>11 diseases</Text>
        </View>
        <View style={{
          padding: 25,
          backgroundColor: 'red',
          borderRadius: 20
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
          }}>Head & Face</Text>
          <Text style={{
            fontSize: 16,
            color: '#ddd'
          }}>11 diseases</Text>
        </View>
      </View>
      <View style={{
        flex: 2
      }}>

      </View>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,
    flex: 1,
  }
});


export default App;