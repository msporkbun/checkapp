// tab: Profile for logged in user
import { Image, Text, View, StyleSheet, Platform } from "react-native";
import { useState, useEffect } from "react";
import { useUser } from "@/contexts/userContext";
import { Ionicons } from "@expo/vector-icons";

export function Profile() {
  return () => {
    const user = useUser();

    // useEffect(() => {

    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E2D9D9",
      flex: 1,
      padding: 20,
    },
  });
}
