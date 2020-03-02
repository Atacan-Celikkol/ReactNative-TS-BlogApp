import { EvilIcons } from "@expo/vector-icons";
import { StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types';
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../context/BlogPostContext";

export default function ({ route }) {

   const { state } = useContext(Context);
   const id = route.params.id;
   const blogPost = state.find((x) => x.id === id);

   return <View>
      <Text>Id: {blogPost.id}</Text>
      <Text>Title: {blogPost.title}</Text>
      <Text>Content: {blogPost.content}</Text>
   </View>;
}

export const navigationOptions = ({ navigation, route }): StackNavigationOptions => {
   return {
      headerShown: true,
      headerStyle: styles.header,
      headerTintColor: 'white',
      headerTitleAlign: 'center',
      headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('BlogPostEdit', { id: route.params.id })}>
         <EvilIcons name="pencil" size={35} style={styles.headerIcon} />
      </TouchableOpacity>
   };
};


const styles = StyleSheet.create({
   header: {
      backgroundColor: '#222',
   },
   headerIcon: {
      marginRight: 10,
      color: 'white'
   }
});