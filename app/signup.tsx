// Code: Signup screen
// Using Expo, you need to export the RootLayout component from app/_layout.tsx and use it in app/signup.tsx. This will provide the theme and navigation context to the app. The RootLayout component will also handle the splash screen and font loading. It works as a shell for the app.

import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Signup() {
  return (
    <View style={styles.container}>
      // Label: Signup screen
      <Text>Create Account</Text>
      // Button: Link to login screen
      <Link href="/">
        <Text>Back to Login Page</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
