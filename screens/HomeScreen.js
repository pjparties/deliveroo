import {View,Image, SafeAreaView, Text, TextInput, ScrollView} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
