// Code: Login page
// Using Expo, you need to export the RootLayout component from app/_layout.tsx and use it in app/index.tsx. This will provide the theme and navigation context to the app. The RootLayout component will also handle the splash screen and font loading. It works as a shell for the app.

import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@/contexts/userContext";

function validateEmail(email: string) {
  return email.includes("@email.com");
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const user = useUser();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.description}>Log in with your account</Text>

      <View style={styles.form}>
        <View style={styles.inputContainter}>
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            placeholderTextColor="gray"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text> </Text>
        </View>

        <View style={styles.inputContainter}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.button} disabled={!validateEmail(email)}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>

      {/* Button: Link to signup screen */}
      <Link href="/signup">
        <Text>Don’t have account? sign up</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2D9D9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
  },

  form: {
    width: "100%",
    gap: 8,
  },

  description: {
    fontSize: 14,
    marginBottom: 30,
    color: "#3d3838",
  },

  input: {
    width: "100%",
    height: 40,
    padding: 10,
    color: "black",
  },

  inputContainter: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: "#f3f3f3",
  },

  button: {
    backgroundColor: "#F55D3E",
    width: "50%",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 15,
    paddingRight: 20,
    paddingLeft: 20,
  },

  buttonText: {
    textAlign: "center",
    color: "#E2D9D9",
  },
});
