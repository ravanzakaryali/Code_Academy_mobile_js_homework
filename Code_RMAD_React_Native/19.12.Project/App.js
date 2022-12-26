import { StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Title from './components/Title';


let object = {
  name: 'Rakib',
  card: {
    price: 30,
    date: '26, May'
  },
  files: [
    {
      name: 'Picture',
      itemCount: 896,
      backgroundColor: 'blue'
    },
    {
      name: 'Audio',
      itemCount: 896,
      backgroundColor: 'yellow'
    },
    {
      name: 'Video',
      itemCount: 336,
      backgroundColor: 'red'
    },
    {
      name: 'File',
      itemCount: 289,
      backgroundColor: 'green'
    }
  ],
  recentFiles: [
    {
      title: 'Google UX Course',
      uploadDate: 'April 28',
      uri : '---'
    },
    {
      title: 'Dribble Shot file',
      uploadDate: 'April 26',
      uri: '----'
    }
  ]
}
export default function App() {
  return (
    <View>
      <HomeScreen data={object}/>
    </View>
  );
}