// Code: Signup screen
// Using Expo, you need to export the RootLayout component from app/_layout.tsx and use it in app/signup.tsx. This will provide the theme and navigation context to the app. The RootLayout component will also handle the splash screen and font loading. It works as a shell for the app.

import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    // check password length
    if (password.length >= 8) setValidPassword(true);
    else setValidPassword(false);
  }, [password]);

  useEffect(() => {
    if (email.includes('@') && email.indexOf('@') > 0) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [email]);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={password}
      />
      <Pressable>
        <Text>Sign up </Text>
      </Pressable>

      <Link href="/">
        <Text>Back to Login Page</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2D9D9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    color: 'black',
    // borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    borderWidth: 1,
  },

});
