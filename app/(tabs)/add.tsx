// Tab for added the tasks

import { Image, Text, View, StyleSheet, Platform } from "react-native";
import { useState, useEffect } from "react";
import { useUser } from "@/contexts/userContext";
import { Ionicons } from "@expo/vector-icons";

export default function AddScreen() {
  const user = useUser();

  return (
    <View>
      <Text>Add</Text>
    </View>
  );
}
