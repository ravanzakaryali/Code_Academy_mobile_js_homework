import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserCreate from './components/UserCreate';
import Users from './components/Users';

export default function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }
  useEffect(() => {
    getUsers();
  }, [])

  const addUser = (user) => {
    setUsers([user, ...users]);
  }
  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id != id));
  }

  return (
    <View style={styles.container}>
      <UserCreate addUserState={addUser} />
      <Users data={users} deleteUserState={deleteUser}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
});
