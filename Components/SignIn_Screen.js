import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";


const LogInScreen = (props) => 
{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return
    (
        <SafeAreaView style = {styles.MainScreen}>
            <TextInput
                mode="outlined"
                style={styles.textInput}
                label="Email"
                onChangeText={(text) => setEmail(text)}  />
            <TextInput
                mode="outlined"
                style={styles.textInput}
                label="Password"
                onChangeText={(text) => setPassword(text)}
        />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create
({
    MainScreen: 
    {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "center",
        justifyContent: "center",
    },

});
