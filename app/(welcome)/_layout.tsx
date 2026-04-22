import { Stack } from "expo-router";

export default function WelcomeLayout() {
    return (
        <Stack 
          initialRouteName="index"

          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            contentStyle: { backgroundColor: "#e2e2dfb4"}
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="signin" />
          <Stack.Screen name="signup" />
        </Stack>  
    );
}