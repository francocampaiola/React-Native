import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
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
                className="mb-2"
                color="primary"
                variant="text-only"
                onPress={() => router.push("/products")}
            >
                Productos
            </CustomButton>
            {/* <Link className='mb-5' href={'/products'}>Productos</Link>
                <Link className='mb-5' href={'/profile'}>Perfil</Link>
                <Link className='mb-5' href={'/settings'}>Ajustes</Link> */}
        </View>
    );
};

export default HomeScreen;
