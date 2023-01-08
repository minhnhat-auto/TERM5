import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddScreen from "./AddScreen"
import SuccessScreen from "./SuccessScreen"

const Stack = createNativeStackNavigator()

export default function AddNavigator() {
	return (
		<Stack.Navigator initialRouteName='AddScreen' screenOptions={{ headerShown: false }} e>
			<Stack.Screen name='Add' component={AddScreen}></Stack.Screen>
			<Stack.Screen name='Success' component={SuccessScreen}></Stack.Screen>
		</Stack.Navigator>
	)
}
