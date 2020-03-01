import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { Provider as BlogProvider } from "./context/BlogPostContext";
import { navigationRef } from './RootNavigation';
import BlogPostCreateScreen from './screens/BlogPostCreateScreen';
import BlogPostDetailScreen from './screens/BlogPostDetailScreen';
import IndexScreen, { navigationOptions } from './screens/IndexScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <BlogProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen name="Index" component={IndexScreen} options={navigationOptions} />
                    <Stack.Screen name="BlogPostDetail" component={BlogPostDetailScreen} />
                    <Stack.Screen name="BlogPostCreate" component={BlogPostCreateScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </BlogProvider>
    );
}