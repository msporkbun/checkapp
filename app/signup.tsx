// Code: Signup screen
// Using Expo, you need to export the RootLayout component from app/_layout.tsx and use it in app/signup.tsx. This will provide the theme and navigation context to the app. The RootLayout component will also handle the splash screen and font loading. It works as a shell for the app.

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useUser, UserProvider } from "@/contexts/userContext";
import { router } from "expo-router";

export default function Signup() {
  // Setting useState for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Setting useState for validation
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  // Setting useState for eye icon
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to validate email
  const validateEmail = (email: string) => {
    return email.includes("@") && email.indexOf("@") > 0;
  };
  // Function to validate password
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const user = useUser();

  // Using the useEffect hook to validate email and password after setting useState

  useEffect(() => {
    setValidEmail(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(validatePassword(password));
  }, [password]);

  const isFormValid = () => {
    return validEmail && validPassword && password === confirmPassword;
  };

  const register = async () => {
    const signup = await user.register(email, password);
    router.navigate("/profile");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>

      <View style={styles.form}>
        <View style={styles.inputContainter}>
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* I still don't know how to deal the gap! */}
          <Text> </Text>
        </View>

        <View style={styles.inputContainter}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            // onPress={() => setShowPassword(!showPassword)}
            onPress={() => register()}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </Pressable>
        </View>

        <View style={styles.inputContainter}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Pressable
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      </View>

      <Pressable
        style={isFormValid() ? styles.button : styles.buttonDisabled}
        disabled={!isFormValid()}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>

      <Link href="/">
        <Text>Already have account? Go login</Text>
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
  form: {
    width: "100%",
    gap: 8,
  },

  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    color: "black",
    padding: 10,
  },
  inputContainter: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 15,
  },

  button: {
    backgroundColor: "#F55D3E",
    width: "50%",
    alignItems: "center",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
    marginVertical: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#E2D9D9",
  },

  buttonDisabled: {
    backgroundColor: "#f7856e",
    width: "50%",
    alignItems: "center",
    marginVertical: 15,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
  },
});
