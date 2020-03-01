import React, { useState } from "react";

export interface BlogPost {
   title: string;
}

const BlogContext = React.createContext(null);

export const BlogProvider = ({ children }) => {
   const [blogPosts, setBlogPosts] = useState([]);

   const addBlogPost = (x: BlogPost = { title: 'Blog Post #' + (blogPosts.length + 1) }) => {
      console.log(x);

      setBlogPosts([...blogPosts, x]);
   };

   return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
   </BlogContext.Provider>;
};

export default BlogContext;