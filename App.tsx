import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { Provider as BlogProvider } from "./context/BlogPostContext";
import { navigationRef } from './RootNavigation';
import BlogPostCreateScreen from './screens/BlogPostCreateScreen';
import BlogPostDetailScreen, { navigationOptions as BlogPostDetailScreenNavigationOptions } from './screens/BlogPostDetailScreen';
import BlogPostEditScreen from './screens/BlogPostEditScreen';
import IndexScreen, { navigationOptions as IndexScreenNavigationOptions } from './screens/IndexScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <BlogProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen name="Index" component={IndexScreen} options={IndexScreenNavigationOptions} />
                    <Stack.Screen name="BlogPostDetail" component={BlogPostDetailScreen} options={BlogPostDetailScreenNavigationOptions} />
                    <Stack.Screen name="BlogPostEdit" component={BlogPostEditScreen} />
                    <Stack.Screen name="BlogPostCreate" component={BlogPostCreateScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </BlogProvider>
    );
}