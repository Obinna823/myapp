import { StatusBar } from "expo-status-bar";
import {Image, StyleSheet, Text, TextInput, View, Pressable, } from "react-native";
import { Href, router} from "expo-router"; 

export default function SignInScreen() {
    return(
  
        <View style={ styles.root}>
            <StatusBar/>
            <Image style={styles.illu} source={require("../../assets/images/pngwing.com (2).png")} />
            <View style={styles.textBox}>
                <Text style={styles.firstText}>Sign In</Text>
                <Text style={styles.secondText}>
                    Enter valid username & password to continue
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs} placeholder="Username" />
                <TextInput style={styles.inputs} placeholder="Password" secureTextEntry={true}/>
            </View>

            <Pressable onPress={() => router.push("../forgotpassword" as Href)} style={styles.forgotView}>
                 <Text style={styles.forgot}>Forgot Password</Text>
            </Pressable>

            <Pressable style={styles.loginButton}>
                <Text style={styles.logText}>Login</Text>
            </Pressable>

            <Pressable onPress={() => router.push("../signup")}>
                <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        paddingTop: 30,
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
    },

    illu: { 
       width: 300,
       height: 300,
    },


    textBox: {
        marginTop: 20,
        textAlign: "center",
    },

    firstText: {
       fontSize: 32,
       fontWeight: 600,
       textAlign: "center",

    },

    secondText: {
       fontSize: 16,
       textAlign: "center",
       color: "gray",
       fontWeight: 500,
       marginTop: 10
    },

    inputContainer: {
        marginVertical: 25,
    },

    inputs:{
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        marginVertical: 10

    },

    forgot: {
        color: "blue",
        textAlign: "right",
        fontWeight: 500,
        fontSize: 15,
    },

    forgotView: {
        width: 300,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    loginButton: {
        width: 300,
        paddingVertical: 20,
        backgroundColor: "blue",
        borderRadius: 5,
        marginTop: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    logText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 500,
    },
    
    linkText: { 
        color: "#007",
        textAlign: "center",
        marginTop: 20
    },
});