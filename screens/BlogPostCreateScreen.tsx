import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context } from '../context/BlogPostContext';

export default function BlogPostCreateScreen({ navigation }) {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const { addBlogPost } = useContext(Context);

   return <View style={styles.container}>
      <Text style={styles.inputText}>Title</Text>
      <TextInput style={styles.input} onChangeText={text => setTitle(text)} />
      <Text style={styles.inputText}>Content</Text>
      <TextInput style={styles.input} onChangeText={text => setContent(text)} />
      <Button color='#3a3' title='Save' onPress={() => addBlogPost({ title, content }, () => navigation.navigate('Index'))} />
   </View>;
}

const styles = StyleSheet.create({
   container: {
      paddingVertical: 10,
      paddingHorizontal: 10
   },
   inputText: {
      fontSize: 20
   },
   input: {
      fontSize: 18,
      borderWidth: 1.5,
      borderColor: 'gray',
      borderRadius: 3,
      padding: 5,
      marginBottom: 10
   }
});