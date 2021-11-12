import React from "react";
import { View, TextInput } from "react-native";

export default function login() {
    return (
        <View>
            <TextInput
                placeholder="Email" />
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
            />
        </View>
    )
}