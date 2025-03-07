import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation()

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer)
    }

    return (
        <View className="px-10 mt-5">
            <Link href="/products" asChild>
                <CustomButton className="mb-2" color={"primary"}>
                    Productos
                </CustomButton>
            </Link>
            <CustomButton
                className="mb-2"
                color="secondary"
                onPress={() => router.push("/profile")}
            >
                Perfil
            </CustomButton>
            <CustomButton
                className="mb-2"
                color="tertiary"
                onPress={() => router.push("/settings")}
            >
                Ajustes
            </CustomButton>
            <CustomButton
                className="mb-10"
                color="primary"
                variant="text-only"
                onPress={() => router.push("/products")}
            >
                Productos
            </CustomButton>
            <CustomButton onPress={onToggleDrawer}>
                Abrir menú
            </CustomButton>
        </View>
    );
};

export default HomeScreen;
