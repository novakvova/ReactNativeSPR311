import { useColorScheme } from '@/hooks/use-color-scheme';
import {Tabs} from "expo-router";
import {Colors} from "@/constants/theme";
import {HapticTab} from "@/components/haptic-tab";
import {IconSymbol} from "@/components/ui/icon-symbol";
import React from "react";

const AuthLayout = () => {

    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Вхід',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />

        </Tabs>
    );
}

export default AuthLayout;