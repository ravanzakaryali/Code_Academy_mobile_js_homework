import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* Header Title */}
      <View style={{ ...styles.header, ...styles.pv2 }}>
        <View style={styles.header.headerTitle}>
          <Text style={styles.header.dateText}>
            16.dec.2022
          </Text>
          <Text style={styles.header.title}>
            Farid Rzayev
          </Text>
        </View>
        <View style={styles.headerImg}>
          <Image source={{
            uri: "https://www.w3schools.com/howto/img_avatar.png",
            width: 50,
            height: 50
          }} />
        </View>
      </View>

      {/* Projects */}
      <View>
        {/* Projects Title */}
        <View style={styles.pv2}>
          <Text style={styles.projects.title}>
            Projects
          </Text>
          <View style={styles.projects.features}>
            <Text>Website</Text>
            <Text style={styles.fontOpacity}>Mobile App</Text>
            <Text style={styles.fontOpacity}>Reasearch</Text>
          </View>
        </View>
        {/* Projects card */}
        <View style={{ ...styles.row, ...styles.pv2 }}>
          <View style={{ ...styles.projects.card, ...styles.orange }}>
            <Image source={{
              uri: "https://assets.stickpng.com/images/5aa78e207603fc558cffbf19.png",
              width: 30,
              height: 30
            }} />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>10</Text>
            <Text style={{ color: "white" }}>Completed Task</Text>

          </View>
          <View style={{ ...styles.projects.card, ...{ backgroundColor: "#4b2c5a" } }}>
            <Image style={{
              backgroundColor: 'white',
              borderRadius: 30
            }} source={{
              uri: "http://cdn.onlinewebfonts.com/svg/img_7412.png",
              width: 30,
              height: 30,
            }} />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>10</Text>
            <Text style={{ color: "white" }}>Completed Task</Text>
          </View>
        </View>
        {/* Projects Progress */}
        <View style={styles.projects.progress}>
          <Text style={{...styles.fontOpacity,...styles.pv2}}>IN PROGRESS</Text>
          <View>
            <View style={styles.projects.progress.item}>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, laboriosam.</Text>
              <View style={styles.projects.progress.buttons}>
                <Text style={{ ...styles.projects.progress.buttons.button, ...styles.orange, ...styles.fontOpacity }}>
                  Aug 2
                </Text>
                <Text style={{ ...styles.projects.progress.buttons.button, ...{ backgroundColor: "#dbd2dd" } }}>
                  Landing Page
                </Text>
              </View>
            </View>
            <View style={styles.projects.progress.item}>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, laboriosam.</Text>
              <View style={styles.projects.progress.buttons}>
                <Text style={{ ...styles.projects.progress.buttons.button, ...styles.orange, ...styles.fontOpacity }}>
                  Aug 2
                </Text>
                <Text style={{ ...styles.projects.progress.buttons.button, ...{ backgroundColor: "#dbd2dd" } }}>
                  Landing Page
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    headerTitle: {
      flex: 4
    },
    dateText: {
      color: '#c1c1c1'
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  },
  pv2: {
    paddingVertical: 20,
  },
  projects: {
    title: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    features: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 7
    },
    card: {
      paddingVertical: 75,
      backgroundColor: "red",
      flex: 1,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    progress: {
      item: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        marginVertical:10
      },
      buttons: {
        flexDirection: "row",
        button: {
          backgroundColor: "red",
          marginRight: 20,
          paddingHorizontal: 10,
          borderRadius: 10
        }
      }
    }
  },
  fontOpacity: {
    color: "#ccc"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  orange: {
    backgroundColor: "#ff773c"
  }

});
