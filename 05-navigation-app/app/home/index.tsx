import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "../../components/shared/CustomButton";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className="px-10">
                <Link href='/products' asChild>
                    <CustomButton className="mt-10 mb-10" color={'primary'}>Productos</CustomButton>
                </Link>
                <CustomButton className="mb-10" color="primary" onPress={() => router.push("/products")}>
                    Productos
                </CustomButton>
                <CustomButton className="mb-10" color="primary" variant='text-only' onPress={() => router.push("/products")}>
                    Productos
                </CustomButton>
                {/* <Link className='mb-5' href={'/products'}>Productos</Link>
                <Link className='mb-5' href={'/profile'}>Perfil</Link>
                <Link className='mb-5' href={'/settings'}>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
