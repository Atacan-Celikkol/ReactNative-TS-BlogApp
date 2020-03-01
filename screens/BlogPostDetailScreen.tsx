import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Context } from "../context/BlogPostContext";

export default function ({ route }) {

   const { state } = useContext(Context);
   const id = route.params.id;
   const blogPost = state.find((x) => x.id === id);

   return <View>
      <Text>BlogPostDetailScreen</Text>
      <Text>{blogPost.title}</Text>
   </View>;
}