import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "@/app/store/products.store";
import { Link } from "expo-router";

const ProductsScreen = () => {
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="mt-10 px-4">
                        <Text className="text-2xl font-work-black">{item.title}</Text>
                        <Text>{item.description}</Text>
                        <View className="flex flex-row justify-between mt-2">
                            <Text className="font-work-black">{item.price}</Text>
                            <Link href={`/tabs/products/${item.id}`} className="text-primary">
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default ProductsScreen;
