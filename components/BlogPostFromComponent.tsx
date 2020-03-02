import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { BlogPost } from '../context/BlogPostContext';

export default function BlogPostFormComponent({ initialValues = null, callback }: { initialValues?: BlogPost; callback: (title, content) => void; }) {

   const [title, setTitle] = React.useState(initialValues?.title ?? '');
   const [content, setContent] = React.useState(initialValues?.content ?? '');

   return <View style={styles.container}>
      <Text style={styles.inputText}>Title</Text>
      <TextInput style={styles.input} onChangeText={text => setTitle(text)} value={title} />
      <Text style={styles.inputText}>Content</Text>
      <TextInput style={styles.input} onChangeText={text => setContent(text)} value={content} />
      <Button color='#3a3' title='Save' onPress={() => callback(title, content)} />
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