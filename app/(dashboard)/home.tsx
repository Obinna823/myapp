import { StatusBar } from "expo-status-bar"
import { Text, View, Image, StyleSheet} from "react-native"



export default function HomeScreen() {
    return (
        <View style={styles.root}>
           <StatusBar/>

           <View style={styles.profilerow}>
              <View>
                 <Text style={{
                    textTransform: "uppercase",
                    fontWeight: 500,
                    fontSize: 25,
                    marginBottom: 10
                 }}>Your balance :</Text>
                 <Text style={{
                    fontWeight: 600,
                    fontSize: 32
                 }}>$9,864</Text>
              </View>
            <Image style={styles.profile} source={require("../../assets/images/womanface.jpg")}/>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                marginVertical: 40

            }}>
                <View style={styles.actionBox1}>
                    <Image style={{
                        width: 50,
                        height: 50,
                    }}    source={require("../../assets/images/buy.png")}/>
                    <Text style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize:  16,
                    }}>Buy</Text>
                </View>

                <View style={styles.actionBox2}>
                    <Image style={{
                        width: 50,
                        height: 50,
                    }}    source={require("../../assets/images/sell.png")}/>
                    <Text style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize:  16
                    }}>Sell</Text>
                </View>

                <View style={styles.actionBox3}>
                    <Image style={{
                        width: 50,
                        height: 50,
                    }}    source={require("../../assets/images/exchange.png")}/>
                    <Text style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize:  16
                    }}>Exchange</Text>
                </View>

            </View>
        </View>
    )
}


const styles= StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        padding: 10
    },

    profile: {
        width: 50,
        height: 50,
        borderRadius: 9
    },

    profilerow: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
    },

    actionBox1: {
        width: "30%",
        height: 150,
        backgroundColor: "#d54d4d",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10"
    },

    actionBox2: {
        width: "30%",
        height: 150,
        backgroundColor: "#b9df12",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10"
    },    

    actionBox3: {
        width: "30%",
        height: 150,
        backgroundColor: "#09c713",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10"
    },    
})