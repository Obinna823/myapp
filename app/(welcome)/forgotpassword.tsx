import {  View, Text, Image, StyleSheet, TextInput, Pressable, } from "react-native";
import { StatusBar } from "expo-status-bar"




export default function forgotPasswordScreen() {
    return (
      <View style={styles.root}>
        <StatusBar />
        <Image style={styles.illu} source={require("../../assets/images/pngwing.com (4).png")}></Image>
        <View>
            <Text style={styles.firstText}>Its okay you forgot your password</Text>
            <Text style={styles.secondText}> Lets get you fixed up so you can continue your transactions</Text>
        </View>

        <View style={{
            flexDirection:'row',
            borderWidth:1,
            borderRadius:10,
            padding:10,
            alignItems: "center"
        }}>
            <Pressable style={{ marginRight:10}}><Text>+234</Text></Pressable>
            <TextInput placeholder= "phone number"
            keyboardType="numeric" style={{ flex: 1}} />
            
        </View>
        
        <Pressable style={styles.sendOTPButton}>
            <Text>SendOTP</Text>
        </Pressable>

      </View>
    )
}


const styles = StyleSheet.create({
root: {
    backgroundColor: "#fff",
    width:"100%",
    height:"100%",
    paddingTop:30,
    display: "flex",
    flexDirection: "column",
    alignItems:"center"

},

  illu: {
    width:200,
    height:200,  
},


textBox:{
    marginTop:20,
    textAlign: "center"
},


firstText: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center"
},

secondText:{
    fontSize:16,
    textAlign:"center",
    color:"gray",
    fontWeight:500,
    marginTop:10,  
},
inputContainer: {
    marginVertical: 25,

},








inputs: {
    width:300,
    padding:10,
    borderWidth:1,
    borderColor:"gray",
    borderRadius: 5,
    marginVertical:10,

},

forgot:{
    color:"blue",
    textAlign: "right",
    fontWeight:500,
    fontSize:16,


},

forgotView:{
    width:300,
    backgroundColor: "green",
    display:"flex",
    flexDirection: "row",
    justifyContent:"flex-end"
    
},
sendOTPButton: {
    width:300,
    paddingVertical:20,
    backgroundColor:"blue",
    borderRadius:5,
    marginTop:15,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",


    
},


logText:{
    color: "#fff",
    fontSize:16,
    fontWeight: 500,
},


})