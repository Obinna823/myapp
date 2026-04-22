import { View, Text, TextInput, Pressable, StyleSheet, Alert, StatusBar, Image, } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function signup() {
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignup = () => {
        if (!fullname || !phone || !password) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }
        Alert.alert("Success", "Account created! Please sign in.");
        router.push("/signin");
    };

    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <Image style={styles.illu} source={require("../../assets/images/pngwing.com (3).png")} />

            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Use proper information to continue</Text>
            <TextInput
                style={styles.input}
                placeholder="Full name"
                value={fullname}
                onChangeText={setFullname}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Pressable style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Create Account</Text>
            </Pressable>

            <Pressable onPress={() => router.push("/signin")}>
                <Text style={styles.linkText}>Already have an account? Sign In</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 0,
        paddingRight: 0,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        
    },

    title: {
        fontSize: 28, 
        fontWeight: "bold",
        marginBottom: 5, 
        textAlign: "center",
    },

    input: { 
        borderWidth: 1,
        borderColor: "#fff",
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
    },

    button: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 8,
        alignItems: "center"
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    linkText: {
        color: "#007",
        textAlign: "center",
        marginTop: 20
    },

    illu: { 
       width: 300,
       height: 300,
       alignSelf: "center",
       resizeMode: "contain",
       marginTop: 0
    },

    subtitle: {
        fontSize: 14,
        color: "gray",
        textAlign: "center",
        marginBottom: 25,
        fontWeight: 500
    },
})