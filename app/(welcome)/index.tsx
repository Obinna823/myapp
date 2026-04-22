import {  Text, View, StyleSheet, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Href, router } from "expo-router"


export default function StartScreen () {
    return (
        <View>
            <StatusBar/>
            <Image
            style = {styles.Image} source={require("../../assets/images/pngwing.com.png")}
            />
            <View>
                <Text style={styles.topText}>Welcome Back!</Text>
                <Text style={styles.topText}>Sign In or Register</Text>
            </View>
            <Text style={styles.welcomeText}>
                Create an account in minutes to access exclusive features, track your activities, stay updated.
            </Text>
            <View>
                <Pressable onPress={() => router.push
                ("/signup" as Href)} style={styles.buttonOne}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/signin" as Href)} style={styles.buttonOne}>
                
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
            </View>
        </View>   
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    Image: {
        width: 400
    },
    topText: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: 600
    },
    welcomeText: {
        paddingVertical: 30,
        paddingHorizontal: 40,
        textAlign: "center",
        fontSize: 16,
        fontWeight: 500,
        color: "gray"
    },
    buttonOne: {
        width: 300,
        backgroundColor: "green",
        paddingVertical: 15,
        marginLeft: 40,
        borderRadius: 50,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    buttonText: {
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center"
    }
})