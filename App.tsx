import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { BlogProvider } from "./context/BlogPostContext";
import { navigationRef } from './RootNavigation';
import IndexScreen from './screens/IndexScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <BlogProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </BlogProvider>
    );
}