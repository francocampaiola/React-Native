import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{ tabBarActiveTintColor: "purple", headerShown: false }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={28} name="home-outline" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: "Favoritos",
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={28} name="star-outline" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: "Stack",
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={28} name="person-add-outline" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
