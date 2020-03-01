import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import BlogContext, { BlogPost } from '../context/BlogPostContext';

export default function IndexScreen() {
    const blogPosts: { data: BlogPost[], addBlogPost: any; } = useContext(BlogContext);

    return (
        <View>
            <Text>Hi, Index</Text>
            <Button title="Add Blog Post" onPress={() => blogPosts.addBlogPost()} />
            <FlatList
                data={blogPosts.data}
                keyExtractor={(x) => x.title}
                renderItem={(x) => <Text key={x.index}>{x.item.title}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({});