import React from 'react';
import { StyleSheet } from 'react-native';
import BlogPostFormComponent from '../components/BlogPostFromComponent';
import { Context } from '../context/BlogPostContext';

export default function BlogPostCreateScreen({ navigation }) {
   const { addBlogPost } = React.useContext(Context);

   const add = (title, content) => {
      addBlogPost({ title, content }, () => navigation.pop());
   };

   return <BlogPostFormComponent callback={(title, content) => add(title, content)} />;
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