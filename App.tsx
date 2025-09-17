import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

type RootStackParamList = {
  AgeScreen: undefined;
  MovieScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();