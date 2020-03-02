import { Feather } from '@expo/vector-icons';
import { StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types';
import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BlogPost, Context } from '../context/BlogPostContext';

export default function IndexScreen({ navigation }) {
    const { state, deleteBlogPost }: { state: BlogPost[]; addBlogPost: any; deleteBlogPost: any; } = useContext(Context);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(x) => x.id}
                renderItem={(x) =>
                    <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('BlogPostDetail', { id: x.item.id })}>
                        <Text style={styles.title}>{x.item.title}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(x.item.id)}>
                            <Feather name="trash" style={styles.icon} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

export const navigationOptions = ({ navigation }): StackNavigationOptions => {
    return {
        headerShown: true,
        headerStyle: styles.header,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('BlogPostCreate')}>
            <Feather name="plus" size={30} style={styles.headerIcon} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#222',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    },
    headerIcon: {
        marginRight: 10,
        color: 'white'
    }
});