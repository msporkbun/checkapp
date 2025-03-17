// Code: Login page
// Using Expo, you need to export the RootLayout component from app/_layout.tsx and use it in app/index.tsx. This will provide the theme and navigation context to the app. The RootLayout component will also handle the splash screen and font loading. It works as a shell for the app.

import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      // Label: Login screen
      <Text>Login</Text>
      // Button: Link to signup screen
      <Link href="/signup">
        <Text>Sign me Up!</Text>
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
