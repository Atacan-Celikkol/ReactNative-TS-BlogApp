import React from 'react';
import BlogPostFormComponent from '../components/BlogPostFromComponent';
import { Context } from '../context/BlogPostContext';

export default function BlogPostEditScreen({ route, navigation }) {
   const { state, editBlogPost } = React.useContext(Context);
   const id = route.params.id;
   let blogPost = state.find((x) => x.id === id);

   const edit = (title, content) => {
      blogPost = { ...blogPost, content, title };
      editBlogPost(blogPost, () => navigation.pop());
   };

   return <BlogPostFormComponent initialValues={blogPost} callback={(title, content) => edit(title, content)} />;
}